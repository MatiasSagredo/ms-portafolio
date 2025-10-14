import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        cssMinify: 'lightningcss',
        target: ['es2020',
            'chrome58',
            'edge16',
            'firefox57',
            'node12',
            'safari11']
    },
    css: {
        transformer: 'lightningcss'
    }
})
