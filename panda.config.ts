import { defineConfig } from '@pandacss/dev'
 
export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx,js,jsx,astro}', './pages/**/*.{ts,tsx,js,jsx,astro}'],
  outdir: 'styled-system'
})