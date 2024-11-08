import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TelegramUIVue',
      formats: mode === 'cjs' ? ['cjs'] : ['es'],
      fileName: (format) => `${format === 'cjs' ? 'cjs/' : ''}index.js`
    },
    rollupOptions: {
      external: ['vue', '@floating-ui/vue', '@twa-dev/types'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: ({ name }) => {
          return `${name}.js`
        },
        chunkFileNames: ({ name }) => {
          return `${name}.js`
        },
        assetFileNames: ({ name }) => {
          return `${name}.[ext]`
        },
        globals: {
          vue: 'Vue',
          '@floating-ui/vue': 'FloatingUIVue'
        }
      }
    },
    sourcemap: true,
    outDir: mode === 'cjs' ? 'dist/cjs' : 'dist'
  }
}))
