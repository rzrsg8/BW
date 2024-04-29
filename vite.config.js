import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/BW/', // Set the base to match your GitHub Pages path
  plugins: [react()],
})
