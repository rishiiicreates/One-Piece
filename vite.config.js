import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server :{
    allowedHosts: ['7c9b30c1-a6f9-463e-a05a-79a6d52c3b5c-00-2h7xawo86blu8.pike.repl.co']
  }
})
