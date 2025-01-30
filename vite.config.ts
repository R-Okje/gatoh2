import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'gatoh2', // Replace with your actual repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
