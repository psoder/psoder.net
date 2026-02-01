// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://psoder.net",

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Inter",
        cssVariable: "--font-inter",
      },
      {
        provider: fontProviders.google(),
        name: "IBM Plex Serif",
        cssVariable: "--font-ibm-plex-serif",
      },
      {
        provider: fontProviders.googleicons(),
        name: "Google Icons",
        cssVariable: "--font-google-icons",
        options: {
          experimental: {
            glyphs: ["a"],
          },
        },
      },
    ],
  },

  integrations: [icon()],
});