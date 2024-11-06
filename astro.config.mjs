import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue"; 
import react from "@astrojs/react"; 

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  },
  build: {
    format: "preserve"
  },
  integrations: [
    tailwind(),
    vue(),
    react() 
  ]
});

