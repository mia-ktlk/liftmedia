import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, loadEnv } from "vite";

const PROJECT_ROOT = path.resolve(import.meta.dirname);

/**
 * Vite `base` — asset prefix and `import.meta.env.BASE_URL`.
 * Set `VITE_BASE_PATH` for GitHub project pages, e.g. `/lift-media/` (leading slash required; trailing slash added if missing).
 */
function viteBase(mode: string): string {
  const fromFiles = loadEnv(mode, PROJECT_ROOT, "");
  const raw = (process.env.VITE_BASE_PATH ?? fromFiles.VITE_BASE_PATH ?? "/").trim();
  if (!raw || raw === "/") return "/";
  const withLead = raw.startsWith("/") ? raw : `/${raw}`;
  return withLead.endsWith("/") ? withLead : `${withLead}/`;
}

export default defineConfig(({ mode }) => ({
  base: viteBase(mode),
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: PROJECT_ROOT,
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    strictPort: false,
    host: true,
    allowedHosts: ["localhost", "127.0.0.1"],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
}));
