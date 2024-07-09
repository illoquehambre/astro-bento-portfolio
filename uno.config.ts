// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}"],
  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      sans: ["CabinetGrotesk", "Satoshi"],
    },
    gridTemplateRows: {
      "auto-250": "repeat(auto-fill, 250px)",
    },
    gridTemplateColumns: {
      "4-minmax": "repeat(4, minmax(150px, 1fr))",
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717" /* Exactly your example for the background */,
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B" /* Deeper and darker */,
      },
      primary: {
        100: "#F9CDD3",
        200: "#F3A3AA",
        300: "#EC7981",
        400: "#E64F59",
        500: "#E63946",
        600: "#CF2F3D",
        700: "#B82534",
        800: "#A01B2B",
        900: "#891321",
      },
      secondary: {
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#134e4a",
      },
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
      },
    }),
  ],
  shortcuts: {
    'group-primary': 'group', // Define el alias para group-1
    'group-primary-hover': 'group-hover',
    'group-secondary': 'group', // Define el alias para group-2
    'group-secondary-hover': 'group-hover',
  },
  rules: [
    // Reglas personalizadas para group-hover
    [/^group-primary-hover:(.*)$/, ([, s]) => ({ [`.group-1:hover &`]: s })],
    [/^group-secondary-hover:(.*)$/, ([, s]) => ({ [`.group-2:hover &`]: s })],
  ],
});
