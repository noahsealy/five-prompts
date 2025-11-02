import { EmailTemplate } from './templates/welcome';
import { resend } from '@/app/lib/resend';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function sendWelcome() {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });


  console.log('Welcome email sent', data);
  console.log('Welcome email error', error);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};