import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync, existsSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isGitHubPages = mode === 'github-pages';
  
  return {
    base: isGitHubPages ? '/MEVEST/' : '/',
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [
      react(),
      // GitHub Pages SPA fallback: copy index.html -> 404.html so BrowserRouter works on refresh/deep-link
      {
        name: 'copy-404-for-github-pages',
        closeBundle() {
          if (isGitHubPages) {
            const outDir = path.resolve(__dirname, 'dist-github');
            const idx = path.join(outDir, 'index.html');
            const notFound = path.join(outDir, '404.html');
            if (existsSync(idx)) {
              try {
                copyFileSync(idx, notFound);
                console.log('[vite] copied index.html -> 404.html for GitHub Pages SPA fallback');
              } catch (e) {
                console.warn('[vite] failed to copy 404.html', e);
              }
            }
          }
        },
      },
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 600,
      outDir: isGitHubPages ? 'dist-github' : 'dist',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            charts: ['recharts'],
            ui: ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tabs', 'lucide-react'],
            supabase: ['@supabase/supabase-js', '@tanstack/react-query'],
          },
        },
      },
    },
  };
});
