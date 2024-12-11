import { validateEnv } from './env';

const OPENAI_API_URL = 'https://api.openai.com/v1/images/generations';

export async function generateImageFromPrompt(prompt: string): Promise<string> {
  const env = validateEnv();
  
  try {
    const response = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt,
        n: 1,
        size: "1024x1024"
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Failed to generate image');
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An unexpected error occurred');
  }
}