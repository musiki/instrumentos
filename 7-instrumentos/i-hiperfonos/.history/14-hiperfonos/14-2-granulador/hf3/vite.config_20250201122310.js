import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    loader: "jsx", // Forzar JavaScript puro
  },
});
