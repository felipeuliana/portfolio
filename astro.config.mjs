// @ts-check

import keystatic from '@keystatic/astro';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
  root: '',
  adapter: netlify(),
});