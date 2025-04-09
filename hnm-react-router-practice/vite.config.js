import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/products': {
                target: 'https://json-server-vercel-xi-seven.vercel.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/products/, '/products'),
            },
        },
    },
});
// const url = `/products`;
