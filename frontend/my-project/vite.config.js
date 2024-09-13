import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': "http://localhost:8000",
      '/web3forms-api': {
        target: 'https://api.web3forms.com/submit',
        changeOrigin: true,
        
      },
    }
  },
  plugins: [react()],
})
