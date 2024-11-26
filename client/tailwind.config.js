/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          "100%": { transform: "translateX(100%)" }, // Start from outside the screen (right side)
          "0%": { transform: "translateX(-100%)" }, // End outside the screen (left side)
        },
      },
      fontFamily: {
        agrandirRegular: ["Agrandir Regular", ...fontFamily.sans], // Default Agrandir
        agrandirLight: ['"Agrandir Grand"', ...fontFamily.sans],
        agrandirNarrow: ['"Agrandir Narrow"', ...fontFamily.sans],
        agrandirWideLight: ['"Agrandir Wide Light"', ...fontFamily.sans],
        agrandirTight: ['"Agrandir Tight"', ...fontFamily.sans],
        agrandirWide: ['"Agrandir Wide"', ...fontFamily.sans],
        agrandirTextBold: ['"Agrandir Text Bold"', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
