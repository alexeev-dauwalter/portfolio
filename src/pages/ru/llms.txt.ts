import type { APIRoute } from 'astro';
import { buildLlmsTxt } from '@content/llms';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString() ?? '';
  return new Response(buildLlmsTxt('ru', origin), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
