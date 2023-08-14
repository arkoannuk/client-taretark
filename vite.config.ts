import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        _redirects: './public/_redirects', // Specify the path to your _redirects file
      },
    },
  },
});
