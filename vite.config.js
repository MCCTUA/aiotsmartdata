import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' keeps asset paths relative so the built dist/ can be dropped on
// any static host (HashRouter + relative base = deploy anywhere, no rewrites).
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
})
