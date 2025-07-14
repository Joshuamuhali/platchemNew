import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from 'lovable-tagger';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve path aliases
const resolvePath = (p: string) => path.resolve(__dirname, p);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('./src')
    }
  },
  server: {
    host: '::',
    port: 8080
  },
  plugins: [
    react(),
    componentTagger()
  ],
});
