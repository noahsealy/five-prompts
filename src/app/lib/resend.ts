import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
console.log('resendApiKey', resendApiKey);
if (!resendApiKey) {
    // throw new Error('RESEND_API_KEY is not set');
    console.log('RESEND_API_KEY is not set');
}
console.log('RESEND_API_KEY is set');
export const resend = new Resend(resendApiKey);
