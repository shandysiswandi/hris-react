import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
  resolve: {
    alias: {
      "@modules": path.resolve(__dirname, "./src/modules"),
      "@assets": path.resolve(__dirname, "./src/shared/assets"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@hooks": path.resolve(__dirname, "./src/shared/hooks"),
      "@layouts": path.resolve(__dirname, "./src/shared/layouts"),
      "@pages": path.resolve(__dirname, "./src/shared/pages"),
      "@stores": path.resolve(__dirname, "./src/shared/stores"),
      "@utils": path.resolve(__dirname, "./src/shared/utils"),
    },
  },
});
