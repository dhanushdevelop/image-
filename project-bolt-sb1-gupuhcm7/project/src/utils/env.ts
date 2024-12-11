/**
 * Environment variable validation
 */
export function validateEnv() {
  const { VITE_OPENAI_API_KEY } = import.meta.env;

  if (!VITE_OPENAI_API_KEY) {
    throw new Error('VITE_OPENAI_API_KEY is required');
  }

  return {
    OPENAI_API_KEY: VITE_OPENAI_API_KEY
  } as const;
}