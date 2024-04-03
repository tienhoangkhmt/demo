import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  server: {
    port: 3000,
    // proxy: {
    //   'api': {
    //     target: 'http://172.16.86.182:9701/',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   }
    // }
  }
})
