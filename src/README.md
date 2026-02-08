# Server Documentation

## Overview
Modern TypeScript backend with enhanced security and validation features.

## Architecture

### Directory Structure
```
src/
├── middleware/
│   ├── errorHandler.ts    # Global error handling
│   └── rateLimiter.ts     # Rate limiting configuration
├── routes/
│   └── contactRoute.ts    # Contact form endpoint
├── types/
│   └── contact.types.ts   # TypeScript interfaces
├── utils/
│   └── validation.ts      # Input validation utilities
└── server.ts              # Main server configuration
```

## Features

### Security
- **Helmet**: Security headers protection
- **Rate Limiting**:
  - Contact form: 5 requests per 15 minutes
  - General API: 100 requests per 15 minutes
- **Input Validation**:
  - Email format validation
  - Name format validation (letters, spaces, hyphens, apostrophes)
  - Message length validation (10-5000 characters)
  - XSS and injection attack detection
- **CORS**: Configured for production and development
- **Request Size Limiting**: 10kb max body size

### Modern Features
- **TypeScript**: Full type safety
- **ES Modules**: Modern module system
- **Node.js Native Watch**: No need for nodemon
- **Graceful Shutdown**: Proper cleanup on termination
- **Health Check**: `/health` endpoint for monitoring
- **Error Handling**: Centralized error handling with custom error classes

## Environment Variables

Required variables in `.env`:

```env
# Server
NODE_ENV=development
PORT=5000
HOST=0.0.0.0

# Email Configuration (Gmail example)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECIPIENT=recipient@example.com

# Production only
CLIENT_URL=https://your-production-domain.com
```

## Scripts

```bash
# Development (with watch mode)
npm run server

# Build TypeScript
npm run build

# Production (run compiled JS)
npm run server:prod

# Full development (client + server)
npm run dev
```

## API Endpoints

### POST /contact
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, this is my message"
}
```

**Success Response (200):**
```json
{
  "msg": "Thank you for contacting Miguel!"
}
```

**Error Response (400):**
```json
{
  "status": "error",
  "message": "Name is required, Email contains invalid characters"
}
```

**Rate Limit Response (429):**
```json
{
  "status": "error",
  "message": "Too many contact requests from this IP, please try again later."
}
```

### GET /health
Health check endpoint

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-02-05T12:00:00.000Z",
  "uptime": 123.456
}
```

## Validation Rules

### Name
- Required
- 2-100 characters
- Only letters, spaces, hyphens, and apostrophes
- International characters supported (á, é, í, ó, ú, ñ, ü)
- No HTML tags or scripts

### Email
- Required
- Valid email format
- No HTML tags or scripts

### Message
- Required
- 10-5000 characters
- No HTML tags or scripts
- No SQL injection patterns

## Security Patterns Blocked

The server blocks the following malicious patterns:
- Script tags (`<script>`)
- Iframe tags
- Event handlers (`onclick`, `onerror`, etc.)
- JavaScript protocols
- SQL injection keywords
- Template literals
- Eval functions
- Any HTML tags

## Node.js Requirements

- Node.js >= 20.0.0 (for native watch mode)
- npm >= 10.0.0

## Gmail Setup

To use Gmail for sending emails:

1. Enable 2-factor authentication on your Google account
2. Generate an App Password:
   - Go to Google Account settings
   - Security > 2-Step Verification > App passwords
   - Select "Mail" and generate password
3. Use the generated password in `EMAIL_PASS`

## Error Handling

The server uses a centralized error handling system:

- **AppError**: Custom error class for operational errors
- **asyncHandler**: Wrapper for async route handlers
- **errorHandler**: Global middleware for error responses
- **Process Handlers**: Catches uncaught exceptions and unhandled rejections

## Production Deployment

1. Set `NODE_ENV=production`
2. Configure `CLIENT_URL` for CORS
3. Build TypeScript: `npm run build`
4. Start server: `npm start`
5. Server will serve static client files from `client/build`

## Development Tips

- Use `npm run dev` to run both client and server
- Server auto-restarts on file changes (Node.js --watch)
- Check health endpoint: `http://localhost:5000/health`
- Monitor rate limits in response headers
