import solidjs from '@astrojs/solid-js';
import vercel from '@astrojs/vercel/serverless';
import pandacss from '@pandacss/astro';
import { defineConfig } from 'astro/config';
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  integrations: [
    pandacss(),
    solidjs(),
    auth({ configFile: 'config/auth.config.ts' })
  ],
  adapter: vercel(),
  output: 'server'
});