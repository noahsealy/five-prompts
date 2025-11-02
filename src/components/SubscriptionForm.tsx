'use client';

import EmailInput from './EmailInput';

export default function SubscriptionForm() {
  const handleSubscribe = async (email: string) => {
    console.log('Subscribing email:', email);
    
    // Call the API route instead of the function directly
    const response = await fetch('/api/email/send-welcome', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send welcome email');
    }
    
    console.log('Welcome email sent');
  };

  return <EmailInput onSubscribe={handleSubscribe} />;
}
