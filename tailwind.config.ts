import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Toss Design System — Primitive Palette
        blue: {
          50:  "#EBF3FE",
          100: "#C9DFFB",
          200: "#97BFF8",
          300: "#6BA0F3",
          400: "#4A87F4",
          500: "#3182F6",
          600: "#2272EE",
          700: "#1462E0",
          800: "#0B52CC",
          900: "#043CB5",
        },
        grey: {
          0:   "#FFFFFF",
          50:  "#F9FAFB",
          100: "#F2F4F6",
          200: "#E5E8EB",
          300: "#D1D6DB",
          400: "#B0B8C1",
          500: "#8B95A1",
          600: "#6B7684",
          700: "#4E5968",
          800: "#333D4B",
          900: "#191F28",
        },
        red: {
          500: "#D93025",
        },
        green: {
          500: "#16A34A",
        },
        orange: {
          500: "#EA580C",
        },
      },
      borderRadius: {
        xs:   "4px",
        s:    "8px",
        m:    "12px",
        l:    "14px",
        xl:   "16px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "32px",
        full:  "999px",
      },
      boxShadow: {
        "tds-1":     "0 1px 4px rgba(0,0,0,0.08)",
        "tds-2":     "0 4px 12px rgba(0,0,0,0.10)",
        "tds-3":     "0 8px 24px rgba(0,0,0,0.12)",
        "tds-toast": "0 8px 24px rgba(0,0,0,0.16)",
      },
      fontFamily: {
        pretendard: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
