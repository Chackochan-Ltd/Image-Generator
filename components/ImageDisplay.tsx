
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ImageDisplayProps {
  imageUrl: string | null;
  altText: string;
  isLoading: boolean;
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageUrl, altText, isLoading }) => {
  return (
    <div className="w-full aspect-video bg-gray-700 bg-opacity-50 rounded-lg shadow-inner flex items-center justify-center overflow-hidden border border-gray-600 min-h-[200px] md:min-h-[300px]">
      {isLoading ? (
        <div className="text-center text-gray-400">
          <LoadingSpinner size="large" />
          <p className="mt-2">Generating your masterpiece...</p>
        </div>
      ) : imageUrl ? (
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full h-full object-contain" 
        />
      ) : (
        <div className="text-center text-gray-400 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="font-semibold">Your Image Awaits</p>
          <p className="text-sm">Enter a description and click "Generate Image" to see it here.</p>
        </div>
      )}
    </div>
  );
};
    