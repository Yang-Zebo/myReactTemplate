import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// npm install @types/node -D 安装这个获取 ts 对 node 模块的支持
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // vite项目启动时自动打开浏览器
    port: 8080, // vite项目启动时自定义端口
    hmr: true, // 开启热更新
    https: false, // 是否开启 https
    proxy: { // 配置代理
      '/api': {
        target: 'http://localhost:9000/',
        changeOrigin: true,
        rewrite: (pathStr) => pathStr.replace('/api', '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '/images': 'src/assets/images/' //这里不能通过path模块解析路径的写法
    }
  },
  // 配置 css
  css: {
    // 配置预处理器
    preprocessorOptions: {
      // 配置 less
      less: {
        additionalData: `@import './src/styles/lessConfig.less';`
      }
    }
  }
})
