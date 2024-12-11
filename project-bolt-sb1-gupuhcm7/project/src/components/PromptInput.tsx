import React from 'react';
import { Loader2, SendIcon } from 'lucide-react';

interface PromptInputProps {
  prompt: string;
  loading: boolean;
  onPromptChange: (value: string) => void;
  onSubmit: () => void;
}

export function PromptInput({ prompt, loading, onPromptChange, onSubmit }: PromptInputProps) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Describe the image you want to generate..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        onKeyPress={(e) => e.key === 'Enter' && onSubmit()}
      />
      <button
        onClick={onSubmit}
        disabled={loading || !prompt}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <SendIcon className="w-5 h-5" />
            Generate
          </>
        )}
      </button>
    </div>
  );
}