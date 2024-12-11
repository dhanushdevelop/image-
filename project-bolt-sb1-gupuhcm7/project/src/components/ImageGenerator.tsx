import React, { useState } from 'react';
import { Header } from './Header';
import { PromptInput } from './PromptInput';
import { ImageDisplay } from './ImageDisplay';
import { ErrorMessage } from './ErrorMessage';
import { generateImageFromPrompt } from '../utils/openai';

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt) return;
    
    setLoading(true);
    setError('');
    setImage('');

    try {
      const imageUrl = await generateImageFromPrompt(prompt);
      setImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <Header />
      <PromptInput
        prompt={prompt}
        loading={loading}
        onPromptChange={setPrompt}
        onSubmit={handleGenerate}
      />
      <ErrorMessage error={error} />
      <ImageDisplay image={image} loading={loading} />
    </div>
  );
}