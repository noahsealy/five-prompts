'use client';

import { useState } from 'react';

interface EmailInputProps {
  onSubscribe?: (email: string) => void;
  className?: string;
}

export default function EmailInput({ onSubscribe, className = '' }: EmailInputProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      onSubscribe?.(email);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`flex flex-col sm:flex-row gap-3 w-full max-w-md ${className}`}
    >
      <div className="relative flex-grow">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#212121] border border-gray-200 
            dark:border-gray-800 focus:ring-2 focus:ring-black dark:focus:ring-white 
            focus:border-transparent dark:text-white placeholder-gray-400 
            dark:placeholder-gray-600 transition-all"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className={`px-6 py-3 rounded-lg font-medium transition-all
          ${isLoading 
            ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
            : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90 cursor-pointer'
          }`}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        ) : (
          'Subscribe'
        )}
      </button>
    </form>
  );
}
