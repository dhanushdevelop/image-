import React from 'react';
import { ImageIcon } from 'lucide-react';

interface ImageDisplayProps {
  image: string;
  loading: boolean;
}

export function ImageDisplay({ image, loading }: ImageDisplayProps) {
  if (loading) return null;

  return (
    <div className="flex justify-center">
      {image ? (
        <img 
          src={image} 
          alt="Generated" 
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      ) : (
        <div className="flex flex-col items-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-12">
          <ImageIcon className="w-16 h-16 mb-4" />
          <p>Your generated image will appear here</p>
        </div>
      )}
    </div>
  );
}