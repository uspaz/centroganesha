// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Minificar CSS al máximo
      cssMinify: "lightningcss",
      // Separar chunks para mejor caching
      rollupOptions: {
        output: {
          // Agrupar todo el JS en un solo archivo (es tan poco que no vale separar)
          manualChunks: undefined,
        },
      },
    },
  },
  // Comprimir HTML de producción
  compressHTML: true,
  build: {
    // Inlinear CSS para evitar request extra (reduce roundtrips)
    inlineStylesheets: "always",
  },
});