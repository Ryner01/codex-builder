import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// https://vite.dev/config/
export default defineConfig({
    base: './',
    publicDir: false,
    plugins: [react(), tailwindcss(), viteSingleFile()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
    },
    build: {
        assetsInlineLimit: Number.MAX_SAFE_INTEGER,
        cssCodeSplit: false,
        outDir: 'dist',
        sourcemap: false,
    },
})
