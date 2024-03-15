/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/

const localApi = 'http://192.168.0.212:8080';
const SIMSApi = 'https://192.168.0.101:9097';

export default defineConfig({
  base: process.env.NODE_ENV === 'development' ? '/' : './',
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: localApi,
        changeOrigin: true,
        ws: true,
        secure: false,
      },
      //   '/member': {
      //     target: 'http://localhost:8080',
      //     changeOrigin: true,
      //     ws: true,
      //     secure: false,
      //   },
      '/datainfo': {
        target: SIMSApi,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/datainfo/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
