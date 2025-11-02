import { EmailTemplate } from './templates/welcome';
import { resend } from '@/app/lib/resend';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function sendWelcome(email: string) {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: 'Welcome to Five Prompts',
    react: EmailTemplate(),
  });


  console.log('Welcome email sent', data);
  console.log('Welcome email error', error);
  if (error) {
    throw new Error(error.message);
  }

  return data;
};