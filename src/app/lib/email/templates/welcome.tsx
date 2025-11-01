import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>Thank you for subscribing to Five Prompts. We're excited to have you on board.</p>
      <p>You will receive an email each day with a new prompt.</p>
      <p>If you have any questions, please feel free to contact us at <a href="mailto:support@fiveprompts.com">support@fiveprompts.com</a>.</p>
      <p>Best regards,</p>
      <p>The Five Prompts Team</p>
    </div>
  );
}