import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 1000,
    },
    preview: {
        port: 1234,
    },
    server: {
        host: '0.0.0.0',
        port: 1234,
    }
})
