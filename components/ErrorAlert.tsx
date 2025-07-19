
import React from 'react';

interface ErrorAlertProps {
  message: string;
  className?: string;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, className }) => {
  if (!message) return null;

  return (
    <div className={`p-4 bg-red-700 bg-opacity-80 border border-red-500 text-red-100 rounded-lg shadow-md ${className}`} role="alert">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="font-semibold">Error</p>
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};
    