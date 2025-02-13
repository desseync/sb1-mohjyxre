export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

export const validateWebsite = (website: string | undefined): boolean => {
  if (!website) return true;
  const urlRegex = /^https?:\/\/.+/;
  return urlRegex.test(website);
};

export const sanitizeInput = (input: string): string => {
  // Remove any HTML tags
  const sanitized = input.replace(/<[^>]*>/g, '');
  // Convert special characters to HTML entities
  return sanitized
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};