import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths()],

  // Development server configuration
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/contact': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false
      }
    }
  },

  // Build configuration
  build: {
    outDir: 'build', // CRITICAL: server.js expects client/build
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-ui': ['react-toastify', 'react-type-animation'],
          'vendor-carousel': ['react-owl-carousel', 'react-slick', 'slick-carousel']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },

  // Resolve aliases
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/images'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utilities': path.resolve(__dirname, './src/utilities')
    }
  },

  // Environment variables prefix
  envPrefix: 'VITE_',

  // Optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'axios',
      'react-toastify',
      'react-type-animation',
      'rxjs'
    ],
    exclude: ['react-owl-carousel']
  },

  // CSS configuration
  css: {
    devSourcemap: true
  }
})
