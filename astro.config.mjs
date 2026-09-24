import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://kennewicklocalpros.com',
  integrations: [tailwind(), react()],
  compressHTML: true,
  // The old /directory pages were replaced by listings on each service page + /<service>/<business> profiles.
  redirects: {
    '/directory': '/',
    '/directory/catering': '/catering',
    '/directory/pestcontrol': '/pestcontrol',
    '/directory/housecleaning': '/housecleaning',
  },
  vite: {
    ssr: { external: ['sharp'] },
    logLevel: 'silent',
  },
});
