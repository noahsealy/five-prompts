'use client';

import EmailInput from './EmailInput';

export default function SubscriptionForm() {
  const handleSubscribe = async (email: string) => {    
    const response = await fetch('/api/email/send-welcome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send welcome email');
    }
  };

  return <EmailInput onSubscribe={handleSubscribe} />;
}
