// vite.config.ts
import { defineConfig } from "file:///C:/Users/PC/Desktop/Website/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/PC/Desktop/Website/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///C:/Users/PC/Desktop/Website/node_modules/lovable-tagger/dist/index.js";
import { VitePWA } from "file:///C:/Users/PC/Desktop/Website/node_modules/vite-plugin-pwa/dist/index.js";
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
    componentTagger(),
    VitePWA({
      manifest: {
        name: "Platchem Ltd",
        short_name: "Platchem",
        description: "Leading Engineering Solutions in Zambia",
        theme_color: "#000000",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          },
          {
            src: "favicon.ico",
            sizes: "192x192",
            type: "image/x-icon"
          },
          {
            src: "favicon.ico",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "icon-192x192.png",
        "icon-512x512.png"
      ],
      strategies: "injectManifest",
      srcDir: "src",
      filename: "service-worker.ts",
      workbox: {
        globPatterns: ["**/*.{js,css,html,json,ico,png,jpg,jpeg,svg,webp}"],
        runtimeCaching: [
          {
            urlPattern: "/api/",
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "api-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 1
                // 1 day
              }
            }
          },
          {
            urlPattern: ".(?:png|jpg|jpeg|svg|webp)$",
            handler: "CacheFirst",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30
                // 30 days
              }
            }
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxQQ1xcXFxEZXNrdG9wXFxcXFdlYnNpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFBDXFxcXERlc2t0b3BcXFxcV2Vic2l0ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvUEMvRGVza3RvcC9XZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSAnbG92YWJsZS10YWdnZXInO1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XG5cbmNvbnN0IF9fZmlsZW5hbWUgPSBmaWxlVVJMVG9QYXRoKGltcG9ydC5tZXRhLnVybCk7XG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XG5cbi8vIFJlc29sdmUgcGF0aCBhbGlhc2VzXG5jb25zdCByZXNvbHZlUGF0aCA9IChwOiBzdHJpbmcpID0+IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIHApO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmVQYXRoKCcuL3NyYycpXG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnOjonLFxuICAgIHBvcnQ6IDgwODBcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgY29tcG9uZW50VGFnZ2VyKCksXG4gICAgVml0ZVBXQSh7XG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiBcIlBsYXRjaGVtIEx0ZFwiLFxuICAgICAgICBzaG9ydF9uYW1lOiBcIlBsYXRjaGVtXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkxlYWRpbmcgRW5naW5lZXJpbmcgU29sdXRpb25zIGluIFphbWJpYVwiLFxuICAgICAgICB0aGVtZV9jb2xvcjogXCIjMDAwMDAwXCIsXG4gICAgICAgIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBkaXNwbGF5OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi5pY29cIixcbiAgICAgICAgICAgIHNpemVzOiBcIjY0eDY0IDMyeDMyIDI0eDI0IDE2eDE2XCIsXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlL3gtaWNvblwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6IFwiZmF2aWNvbi5pY29cIixcbiAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UveC1pY29uXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogXCJmYXZpY29uLmljb1wiLFxuICAgICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogW1xuICAgICAgICAnZmF2aWNvbi5pY28nLFxuICAgICAgICAnaWNvbi0xOTJ4MTkyLnBuZycsXG4gICAgICAgICdpY29uLTUxMng1MTIucG5nJ1xuICAgICAgXSxcbiAgICAgIHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXG4gICAgICBzcmNEaXI6ICdzcmMnLFxuICAgICAgZmlsZW5hbWU6ICdzZXJ2aWNlLXdvcmtlci50cycsXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxqc29uLGljbyxwbmcsanBnLGpwZWcsc3ZnLHdlYnB9J10sXG4gICAgICAgIHJ1bnRpbWVDYWNoaW5nOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdXJsUGF0dGVybjogJy9hcGkvJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2FwaS1jYWNoZScsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAxIC8vIDEgZGF5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46ICdcXC4oPzpwbmd8anBnfGpwZWd8c3ZnfHdlYnApJCcsXG4gICAgICAgICAgICBoYW5kbGVyOiAnQ2FjaGVGaXJzdCcsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgIGNhY2hlTmFtZTogJ2ltYWdlcycsXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgICBtYXhFbnRyaWVzOiA1MCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiA2MCAqIDYwICogMjQgKiAzMCAvLyAzMCBkYXlzXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZRLFNBQVMsb0JBQW9CO0FBQzFTLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUyxlQUFlO0FBRXhCLFNBQVMscUJBQXFCO0FBTnlJLElBQU0sMkNBQTJDO0FBUXhOLElBQU0sYUFBYSxjQUFjLHdDQUFlO0FBQ2hELElBQU0sWUFBWSxLQUFLLFFBQVEsVUFBVTtBQUd6QyxJQUFNLGNBQWMsQ0FBQyxNQUFjLEtBQUssUUFBUSxXQUFXLENBQUM7QUFHNUQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxZQUFZLE9BQU87QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixnQkFBZ0I7QUFBQSxJQUNoQixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixhQUFhO0FBQUEsUUFDYixrQkFBa0I7QUFBQSxRQUNsQixTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxNQUNkLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsbURBQW1EO0FBQUEsUUFDbEUsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0UsWUFBWTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlLEtBQUssS0FBSyxLQUFLO0FBQUE7QUFBQSxjQUNoQztBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
