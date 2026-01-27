// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter"
    }, {
      provider: fontProviders.google(),
      name: "IBM Plex Serif",
      cssVariable: "--font-ibm-plex-serif"
    }]
  }
});
