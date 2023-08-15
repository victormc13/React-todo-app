import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
  plugins: [react()],
})
