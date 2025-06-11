import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const mockIp = env.VITE_MOCK_IP;

    return {
        plugins: [
            react(),
        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src'),
            },
        },
        define: {
            __MOCK_IP__: JSON.stringify(mockIp),
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: '[name]__[local]___[hash:base64:5]',
            }
        }
    }
})
