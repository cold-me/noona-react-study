import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            '/love': {
                target: 'https://openlibrary.org/subjects/love.json',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/love/, '/love'),
            },
        },
    },
});
