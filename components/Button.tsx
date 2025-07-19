
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-all duration-150 ease-in-out";
  
  const primaryStyles = "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed";
  const secondaryStyles = "bg-gray-600 hover:bg-gray-700 text-gray-100 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles = variant === 'primary' ? primaryStyles : secondaryStyles;

  return (
    <button
      className={`${baseStyles} ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
    