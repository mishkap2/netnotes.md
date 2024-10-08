import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "1rem",
      sm: "1.2rem",
      base: "1.4rem",
      md: "1.6rem",
      lg: "1.8rem",
      xl: "2rem",
    },
    extend: {
      colors: {
        white: {
          l: "#BDBFCB",
          n: "#A6A8BA",
          d: "#4F5464"
        },
        black: {
          l: "#343A4F",
          n: "#0D0F1B",
          d: "#060914",
        },
        red: {
          l: "#D07676",
          n: "#CB3F2A",
          d: "#9A3225",
        },
        green: {
          l: "#7DC893",
          n: "#15724E",
          d: "#1C4642",
        },
        yellow: {
          l: "#D0AD7D",
          n: "#D18926",
          d: "#A66A15"
        },
        blue: {
          l: "#94D6D8",
          n: "#217182",
          d: "#153F56"
        },
        magenta: {
          l: "#DB97DF",
          n: "#AB46B9",
          d: "#6D2975"
        },
        cyan: {
          l: "#99FAFF",
          n: "#2DA3AD",
          d: "#007B8B"
        },
      }
    },
  },
  plugins: [],
};
export default config;
