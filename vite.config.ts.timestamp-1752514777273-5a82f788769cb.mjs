// vite.config.ts
import { defineConfig } from "file:///C:/Users/PC/Desktop/Website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/PC/Desktop/Website/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/PC/Desktop/Website/node_modules/lovable-tagger/dist/index.js";
import { fileURLToPath } from "url";
var __vite_injected_original_import_meta_url = "file:///C:/Users/PC/Desktop/Website/vite.config.ts";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var resolvePath = (p) => path.resolve(__dirname, p);
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@": resolvePath("./src")
    }
  },
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    componentTagger()
  ]
  // base: "/platchemNew"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcV2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9XZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tICdsb3ZhYmxlLXRhZ2dlcic7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5cclxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgX19kaXJuYW1lID0gcGF0aC5kaXJuYW1lKF9fZmlsZW5hbWUpO1xyXG5cclxuLy8gUmVzb2x2ZSBwYXRoIGFsaWFzZXNcclxuY29uc3QgcmVzb2x2ZVBhdGggPSAocDogc3RyaW5nKSA9PiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBwKTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiByZXNvbHZlUGF0aCgnLi9zcmMnKVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiAnOjonLFxyXG4gICAgcG9ydDogODA4MFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGNvbXBvbmVudFRhZ2dlcigpXHJcbiAgXSxcclxuICAvLyBiYXNlOiBcIi9wbGF0Y2hlbU5ld1wiXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZRLFNBQVMsb0JBQW9CO0FBQzFTLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxxQkFBcUI7QUFKeUksSUFBTSwyQ0FBMkM7QUFNeE4sSUFBTSxhQUFhLGNBQWMsd0NBQWU7QUFDaEQsSUFBTSxZQUFZLEtBQUssUUFBUSxVQUFVO0FBR3pDLElBQU0sY0FBYyxDQUFDLE1BQWMsS0FBSyxRQUFRLFdBQVcsQ0FBQztBQUc1RCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLFlBQVksT0FBTztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGdCQUFnQjtBQUFBLEVBQ2xCO0FBQUE7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
