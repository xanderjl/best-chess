import solidjs from '@astrojs/solid-js';
import pandacss from '@pandacss/dev/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), solidjs()]
});