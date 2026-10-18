import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Конфигурация для запуска React через Vite
export default defineConfig({
  plugins: [react()],
  base: './',
})
