import { Router, Request, Response } from 'express';
import { Resend } from 'resend';
import { ContactRequest, ContactResponse } from '../types/contact.types.js';
import { validateContactData, sanitizeText } from '../utils/validation.js';
import { asyncHandler, AppError } from '../middleware/errorHandler.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

/**
 * POST /contact
 * Handle contact form submissions with validation and email sending via Resend
 */
router.post(
  '/contact',
  contactLimiter,
  asyncHandler(async (req: Request<{}, ContactResponse, ContactRequest>, res: Response<ContactResponse>) => {
    const { name, email, message } = req.body;

    // Validate input data
    const validation = validateContactData(name, email, message);
    if (!validation.valid) {
      throw new AppError(validation.errors.join(', '), 400);
    }

    // Sanitize inputs
    const sanitizedName = sanitizeText(name);
    const sanitizedEmail = sanitizeText(email);
    const sanitizedMessage = sanitizeText(message);

    // Verify required environment variables
    if (!process.env.RESEND_API_KEY) {
      throw new AppError('RESEND_API_KEY not set in .env', 500);
    }

    if (!process.env.EMAIL_RECIPIENT) {
      throw new AppError('EMAIL_RECIPIENT not set in .env', 500);
    }

    console.log('Resend config OK - API key starts with:', process.env.RESEND_API_KEY.substring(0, 6));
    console.log('Sending to:', process.env.EMAIL_RECIPIENT);

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email via Resend (HTTPS API - works on all hosting providers)
    try {
      const { data, error } = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [process.env.EMAIL_RECIPIENT],
        replyTo: sanitizedEmail,
        subject: `Portfolio Contact: Message from ${sanitizedName}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #007bff; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; margin: 20px 0; }
              .info { background-color: white; padding: 15px; margin: 10px 0; border-left: 4px solid #007bff; }
              .label { font-weight: bold; color: #007bff; }
              .footer { text-align: center; color: #666; font-size: 12px; margin-top: 20px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="info">
                  <p><span class="label">Name:</span> ${sanitizedName}</p>
                </div>
                <div class="info">
                  <p><span class="label">Email:</span> ${sanitizedEmail}</p>
                </div>
                <div class="info">
                  <p><span class="label">Message:</span></p>
                  <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio contact form.</p>
                <p>Received at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
          </html>
        `,
      });

      if (error) {
        console.error('Resend error:', JSON.stringify(error));
        throw new AppError(`Resend error: ${error.message || JSON.stringify(error)}`, 500);
      }

      console.log('Email sent successfully via Resend:', data?.id);

      res.status(200).json({
        msg: 'Thank you for contacting Miguel!',
      });
    } catch (error: any) {
      if (error instanceof AppError) throw error;
      console.error('Failed to send email:', error.message);
      throw new AppError(`Email send failed: ${error.message}`, 500);
    }
  })
);

export default router;
