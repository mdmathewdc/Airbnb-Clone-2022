import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    assetsInlineLimit: 2048 // Otherwise images upto this size won't be part of the build
  }
})
