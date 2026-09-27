import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Nintendo 2001 Palette Tokens
        nintendo: {
          red: "#e60012",
          signal: "#f68d1f",
          amber: "#ecab37",
          "nav-gold": "#e48600",
          canvas: "#7a8aba",
          periwinkle: "#8ba1d4",
          sky: "#9fbee7",
          "canvas-soft": "#9fbee7",
          lavender: "#acace7",
          ice: "#c0d5e6",
          "chrome-indigo": "#3d4f97",
          "muted-indigo": "#60619c",
          platinum: "#dedede",
          carbon: "#21242e",
          ink: "#21242e",
          "ink-soft": "#3d4f97",
          "systems-teal": "#206479",
          "games-red": "#a7282b",
        },
      },
      boxShadow: {
        "n-bevel-plate": "inset 1px 1px 0px rgba(255,255,255,0.7), inset -1.5px -1.5px 0px #3d4f97",
        "n-bevel-inset": "inset 1.5px 1.5px 0px #3d4f97, inset -1px -1px 0px rgba(255,255,255,0.8)",
        "n-bevel-raised": "inset 1px 1px 0px rgba(255,255,255,0.8), 1px 1px 2px rgba(0,0,0,0.4)",
        "n-carbon": "0 2px 4px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
