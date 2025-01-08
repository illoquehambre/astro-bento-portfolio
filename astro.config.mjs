import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import events from 'events';

import vercel from "@astrojs/vercel";

// Incrementa el límite global de oyentes
//events.setMaxListeners(50); // Cambia el número según sea necesario

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
  ],

  // Asegúrate de cambiar esta línea
  output: "static",
  adapter: vercel(),  // Aunque el adaptador siga aquí, cambiar a static elimina las funciones serverless
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
      },
    },
  },

});