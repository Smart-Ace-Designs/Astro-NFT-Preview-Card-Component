// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-ace-designs.github.io",
  base: "/astro-nft-preview-card-component",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Outfit",
      cssVariable: "--font-outfit",
      weights: [300, 400, 600],
      styles: ["normal"],
    },
  ],
});
