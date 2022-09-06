import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/mall-management/',
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue'],
            // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
            resolvers: [
                ElementPlusResolver(),

                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon'
                })
            ]
        }),
        Components({
            resolvers: [
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep']
                }),
                // 自动导入 Element Plus 组件
                ElementPlusResolver()
            ]
        }),
        Icons({
            autoInstall: true
        })
    ],
    resolve: {
        // 导入时可省略的扩展名列表
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        // 路径别名
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    server: {
        host: '0.0.0.0',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:4000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api')
            }
        }
    },
    css: {
        postcss: {
            // css自动添加浏览器前缀
            plugins: [require('autoprefixer')]
        }
    }
});
