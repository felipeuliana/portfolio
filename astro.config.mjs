// @ts-check

import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone',
  }),
  base: '/portfolio',
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
  root: '',
  site: 'https://felipeuliana.github.io',
});
