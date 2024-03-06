import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/vendor/[name]-[hash].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },
  plugins: [react(), splitVendorChunkPlugin()],
})