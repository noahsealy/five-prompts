'use client';

import EmailInput from './EmailInput';
import { sendWelcome } from '@/app/lib/email/sendWelcome';

export default function SubscriptionForm() {
  const handleSubscribe = async (email: string) => {
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    await sendWelcome();
    console.log('Welcome email sent');
  };

  return (
    <EmailInput onSubscribe={handleSubscribe} />
  );
}
