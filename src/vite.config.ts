/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  build: {
    outDir: 'build',
    chunkSizeWarningLimit: 100,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [reactRefresh()],
  server: {
    proxy: {
      '/api': {
        target: 'https://api.nex-erp.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
});
