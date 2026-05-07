import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'translations': ['assets/js/modules/translations.js'],
          'vendor': ['assets/js/modules/accessibility.js', 'assets/js/modules/event-handlers.js']
        }
      }
    },
    chunkSizeWarningLimit: 500
  },
  server: {
    open: true,
    port: 3000
  },
  plugins: [
    visualizer({
      filename: 'dist/stats.html',
      open: false,
      gzipSize: true,
      brotliSize: true
    })
  ],
  optimizeDeps: {
    exclude: ['@babel/core', '@babel/preset-env']
  }
}));