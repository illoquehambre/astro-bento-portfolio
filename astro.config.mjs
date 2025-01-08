import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import events from 'events';

// Incrementa el límite global de oyentes
events.setMaxListeners(50); // Cambia el número según sea necesario

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
    UnoCSS({
      injectReset: true,
      extract: false,
      content: {
        pipeline: {
          include: [
            '**/*.astro',
            '**/*.tsx',
            '**/*.jsx',
            '**/*.svelte',
          ],
          exclude: [
            'node_modules/**',
            '.git/**',
            '**/*.md',
          ],
        },
      },
    }),
    icon(),
    svelte(),
  ],
  output: "server",
  adapter: vercel(),
  vite: {
    server: {
      watch: {
        usePolling: true, // Cambia a vigilancia basada en sondeo.
        interval: 300,    // Aumenta el intervalo entre verificaciones para evitar una carga alta.
      },
    },
   
  },
});
