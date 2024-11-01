import { defineConfig, loadEnv } from 'vite'
export default defineConfig(({command, mode}) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: '/',
    resolve: {
      alias: {
        '@': '/src'
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(env.__APP_INFO__)
    }
  }
})