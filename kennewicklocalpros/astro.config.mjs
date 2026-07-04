import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://kennewicklocalpros.com',
  integrations: [tailwind(), react()],
  compressHTML: true,
  vite: { ssr: { external: ['sharp'] }, logLevel: 'silent' },
});
