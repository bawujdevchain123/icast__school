import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
  },
  assetsInclude: ['**/*.jpg', '**/*.JPG', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'],
  build: {
    rollupOptions: {
      input: './src/main.jsx',
    },
  },
})
