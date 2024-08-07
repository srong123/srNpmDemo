import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        lib: {
            entry: './src/index.js',
            name: 'srBouncePlugin',
            fileName: 'sr-bounce-plugin'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        
        }
    }
})