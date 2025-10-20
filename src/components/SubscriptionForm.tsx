'use client';

import EmailInput from './EmailInput';

export default function SubscriptionForm() {
  const handleSubscribe = async (email: string) => {
    // Handle subscription logic here
    console.log('Subscribing email:', email);
    // You can add your API call here
  };

  return (
    <EmailInput onSubscribe={handleSubscribe} />
  );
}
