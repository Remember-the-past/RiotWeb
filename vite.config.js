import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: 'https://47.103.60.193:28888/api/v1',
        changeOrigin: true,
        secure: false,
        headers: {
          Referer: 'https://47.103.60.193:28888/api/v1'
        },
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [vue()],
  build:{
    minify:false
  }
})

