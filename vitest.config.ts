/// <reference types="vitest" />
import {defineConfig} from 'vitest/config'
export default defineConfig({
  test: {
    globals: true,
    // environment: 'jsdom',
    // setupFiles: ['src/setup.ts'],
    include: ['src/**/*.test.ts'],
    coverage: {
      enabled: true, // 启用覆盖率报告
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      exclude: []
    }
  }
})