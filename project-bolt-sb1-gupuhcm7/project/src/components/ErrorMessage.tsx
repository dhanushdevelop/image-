import React from 'react';

interface ErrorMessageProps {
  error: string;
}

export function ErrorMessage({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <div className="p-4 bg-red-50 text-red-600 rounded-lg">
      {error}
    </div>
  );
}