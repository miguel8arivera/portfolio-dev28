/**
 * Security validation utilities for input sanitization
 */

/**
 * Email validation regex
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Name validation - only letters, spaces, and common international characters
 */
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s'-]+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100;
};

/**
 * Message validation - reasonable length
 */
export const validateMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 5000;
};

/**
 * Security validation - detect malicious patterns
 * This helps prevent XSS, SQL injection, and other injection attacks
 */
export const containsMaliciousCode = (text: string): boolean => {
  const maliciousPatterns = [
    /<script[^>]*>.*?<\/script>/gi,           // Script tags
    /<iframe[^>]*>.*?<\/iframe>/gi,           // Iframe tags
    /<object[^>]*>.*?<\/object>/gi,           // Object tags
    /<embed[^>]*>/gi,                         // Embed tags
    /on\w+\s*=\s*["'][^"']*["']/gi,          // Event handlers (onclick, onerror, etc.)
    /javascript:/gi,                          // Javascript protocol
    /data:text\/html/gi,                      // Data URL with HTML
    /\$\{.*?\}/g,                             // Template literals
    /<.*?>/g,                                 // Any HTML tags
    /eval\s*\(/gi,                            // eval function
    /expression\s*\(/gi,                      // CSS expression
    /(union|select|insert|update|delete|drop|create|alter|exec|execute)\s+(from|into|table|database)/gi, // SQL keywords
  ];

  return maliciousPatterns.some(pattern => pattern.test(text));
};

/**
 * Sanitize text by removing potentially dangerous characters
 */
export const sanitizeText = (text: string): string => {
  return text
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .substring(0, 5000);   // Limit length
};

/**
 * Validate all contact form fields
 */
export const validateContactData = (name: string, email: string, message: string): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  // Check for empty fields
  if (!name?.trim()) {
    errors.push('Name is required');
  }
  if (!email?.trim()) {
    errors.push('Email is required');
  }
  if (!message?.trim()) {
    errors.push('Message is required');
  }

  // If any field is empty, return early
  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Check for malicious code
  if (containsMaliciousCode(name)) {
    errors.push('Name contains invalid characters');
  }
  if (containsMaliciousCode(email)) {
    errors.push('Email contains invalid characters');
  }
  if (containsMaliciousCode(message)) {
    errors.push('Message contains invalid characters');
  }

  // Validate formats
  if (!validateName(name)) {
    errors.push('Name must be 2-100 characters and contain only letters, spaces, hyphens, and apostrophes');
  }
  if (!validateEmail(email)) {
    errors.push('Invalid email format');
  }
  if (!validateMessage(message)) {
    errors.push('Message must be between 10 and 5000 characters');
  }

  return {
    valid: errors.length === 0,
    errors
  };
};
