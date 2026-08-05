import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> aman untuk GitHub Pages apa pun nama repo-nya (tidak blank page)
export default defineConfig({
  plugins: [react()],
  base: './',
})
