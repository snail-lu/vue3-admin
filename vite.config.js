import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vue3-admin/',
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue, vue-router, pinia, 以及ElMessage, ElMessageBox等API
            imports: ['vue', 'vue-router', 'pinia', { 'element-plus/es': ['ElMessage', 'ElMessageBox'] }],
            dts: 'src/auto-import.d.ts',
            eslintrc: {
                enabled: true
            },
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            resolvers: [
                // 自动导入 Element Plus 组件
                ElementPlusResolver()
            ],
            dts: 'src/components.d.ts'
        })
    ],
    resolve: {
        // 导入时可省略的扩展名列表
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        // 路径别名
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        host: true,
        port: 8080
        // 代理配置，本项目使用了fast mock，无需配置代理
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:4000',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '/api')
        //     }
        // }
    },
    css: {
        postcss: {
            // css自动添加浏览器前缀
            plugins: [require('autoprefixer')]
        }
    },
    build: {
        outDir: 'hl-scn-collection-web-h5',
        terserOptions: {
            compress: {
                keep_infinity: true
            }
        },
        // 禁用该功能可能会提高大型项目的构建性能
        brotliSize: false,
        rollupOptions: {
            output: {
                // 拆分单独模块
                manualChunks: {
                    'element-plus': ['element-plus']
                }
            }
        }
    }
});
