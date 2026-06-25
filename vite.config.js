import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dream_pet_v2/',
  plugins: [react()],
})