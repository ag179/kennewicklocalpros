import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

const env = loadEnv('production', process.cwd(), 'VITE_');

export default defineConfig({
  output: 'static',
  site: 'https://kennewicklocalpros.com',
  integrations: [tailwind(), react()],
  compressHTML: true,
  vite: {
    ssr: { external: ['sharp'] },
    logLevel: 'silent',
    define: {
      'import.meta.env.VITE_SUPABASE_URL': JSON.stringify(env.VITE_SUPABASE_URL),
      'import.meta.env.VITE_SUPABASE_ANON_KEY': JSON.stringify(env.VITE_SUPABASE_ANON_KEY),
    },
  },
});
