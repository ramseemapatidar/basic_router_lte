import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
        "@app":"/src",
        "@components": "/src/components",
        "@pages": "/src/pages",
        "@store": "/src/store",
    },
  },
});
