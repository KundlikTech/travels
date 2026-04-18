import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Public directory configuration
  publicDir: 'public',
  
  // Build configuration optimized for production
  build: {
    // Output directory
    outDir: 'dist',
    
    // Generate sourcemaps in production for debugging
    sourcemap: false,
    
    // Asset handling configuration
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    
    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    
    // Module output configuration
    modulePreload: {
      polyfill: true,
    },
    
    // Rollup options for better module splitting
    rollupOptions: {
      output: {
        // Module entry format
        format: 'es',
        
        // Code splitting strategy
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/i.test(name ?? '')) {
            return 'images/[name]-[hash][extname]';
          } else if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]';
          } else if (/\.(woff|woff2|eot|ttf|otf)$/.test(name ?? '')) {
            return 'fonts/[name]-[hash][extname]';
          }
          return '[name]-[hash][extname]';
        },
        
        // Manual chunks configuration for better code splitting
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'vendor-aos': ['aos'],
        },
      },
    },
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    
    // Empty outDir on build
    emptyOutDir: true,
    
    // Report compressed size
    reportCompressedSize: true,
  },
  
  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
    open: true,
  },
  
  // Preview configuration for Netlify
  preview: {
    port: 4173,
    strictPort: false,
  },
  
  // CSS configuration
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  
  // Environment-specific configuration
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
