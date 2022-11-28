import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.js',
            name: 'vue-form-generator-element',
            fileName: (format) => `vue-form-generator-element.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    plugins: [
        vue(),
    ],
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
    },
})
