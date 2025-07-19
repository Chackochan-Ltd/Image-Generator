
import React from 'react';

interface ReviewNotesProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  // onChange is already part of TextareaHTMLAttributes
  // placeholder is already part of TextareaHTMLAttributes
  // disabled is already part of TextareaHTMLAttributes
}

export const ReviewNotes: React.FC<ReviewNotesProps> = (props) => {
  return (
    <textarea
      rows={4}
      className="w-full p-3 bg-gray-700 bg-opacity-80 border border-gray-600 rounded-lg text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 focus:outline-none transition-colors duration-150 placeholder-gray-400 disabled:opacity-60 disabled:cursor-not-allowed resize-y"
      {...props}
    />
  );
};
    