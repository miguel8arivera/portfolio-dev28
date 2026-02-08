import { Router, Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { ContactRequest, ContactResponse } from '../types/contact.types.js';
import { validateContactData, sanitizeText } from '../utils/validation.js';
import { asyncHandler, AppError } from '../middleware/errorHandler.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

/**
 * POST /contact
 * Handle contact form submissions with validation and email sending
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
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email configuration missing: EMAIL_USER or EMAIL_PASS not set');
      throw new AppError('Email service is not configured', 500);
    }

    if (!process.env.EMAIL_RECIPIENT) {
      console.error('Email configuration missing: EMAIL_RECIPIENT not set');
      throw new AppError('Email service is not configured', 500);
    }

    // Create email transporter
    const smtpTransporter = nodemailer.createTransport({
      service: 'Gmail',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await smtpTransporter.verify();
    } catch (error) {
      console.error('SMTP verification failed:', error);
      throw new AppError('Email service is temporarily unavailable', 500);
    }

    // Prepare email options
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENT,
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
      text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${sanitizedEmail}

Message:
${sanitizedMessage}

---
Received at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    try {
      const info = await smtpTransporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);

      res.status(200).json({
        msg: 'Thank you for contacting Miguel!',
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      throw new AppError('Failed to send message. Please try again later.', 500);
    }
  })
);

export default router;
