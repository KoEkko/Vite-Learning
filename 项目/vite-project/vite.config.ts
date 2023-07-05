import { defineConfig, normalizePath } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import path from "path"
import viteEslint from 'vite-plugin-eslint'

const variablePath = normalizePath(path.resolve('./src/variable.scss'))

// https://vitejs.dev/config/
export default defineConfig({
  css: { // css相关的配置
    modules:{
      // 可以通过 generateScopedName 属性来对生成的类名进行自定义
      // 其中，name 表示当前文件名， loacl表示类名 
      generateScopedName:"[name]__[local]__[hash:5]"
    },
    postcss:{
      plugins:[
        autoprefixer({
          // 指定目标浏览器
          overrideBrowserslist:['Chrome > 40', 'ff > 31', 'ie 11']
        }),
        viteEslint()
      ]
    },
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
