/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import istanbul from 'vite-plugin-istanbul';
import { coverageConfigDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  build: {
    sourcemap: 'hidden',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      reporter: ['text'],
      all: true,
      include: ['**/*.{jsx,tsx}'],
      exclude: [
        ...coverageConfigDefaults.exclude,
        'server.tsx',
        'src/entry-client.tsx',
        'src/entry-server.tsx',
      ],
    },
  },
  ssr: { noExternal: ['@reduxjs/toolkit'] },
  server: {
    open: true,
  },
});
