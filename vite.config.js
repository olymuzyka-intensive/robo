import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/robo/",
  plugins: [
    react(),
    {
      name: 'vite-plugin-sass',
      enforce: 'pre',
      apply: 'build',
    },
  ],
})
