import { EmailTemplate } from './templates/dailyDigest';
import { resend } from '@/app/lib/resend';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function sendDailyDigest() {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['delivered@resend.dev'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};