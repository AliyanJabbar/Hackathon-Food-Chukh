import DOMPurify from "dompurify";

const sanitizeInput = (input: string): string => {
  //handling sanitization by library
  const sanitizedInput = DOMPurify.sanitize(input);
  return sanitizedInput;
};

export default sanitizeInput;
