import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        secure: false, // Can be true in production
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Optionally rewrite the path
      },
    },
  },
  build: {
    outDir: 'dist', // Customize output directory
    sourcemap: true, // Enable source maps for easier debugging
  },
});
