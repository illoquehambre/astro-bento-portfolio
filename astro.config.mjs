import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from '@astrojs/vercel/serverless';
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
//import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs"; // Asegúrate de que la ruta no tenga espacios en blanco.

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://ignaciomg.xyz/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://ignaciomg.xyz/sitemap-index.xml",
        "https://ignaciomg.xyz/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  /*
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  */
  output: "server",
  adapter: vercel(), // Cambia netlify() por vercel()
  vite: {
    assetsInclude: "**/*.riv",
  },
});
