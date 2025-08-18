import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], // Poppins
        display: ["var(--font-display)"], // Livvic
        second: ["var(--font-second)"], // Parisienne
      },
    },
  },
  plugins: [],
};

export default config;
