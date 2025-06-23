import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: './',
        plugins: [
            react()
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        define: {
            __API_BASE_URL__: JSON.stringify(env.VITE_API_BASE_URL)
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            }
        },
        server: {
            port: 8080
        },
        preview: {
            port: 8080,
        },
    };
});
