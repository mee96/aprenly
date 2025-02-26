import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: "/nombre-repo/",
  server: { watch: { usePolling: true } }

})
//cambiar el nombre-repo por el nombre de neustro repo en GH