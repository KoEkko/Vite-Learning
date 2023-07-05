import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'

import path from "path"

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  css: { // css相关的配置
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个scss文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  // root:path.join(__dirname, 'src'),
  plugins: [react()],
})
