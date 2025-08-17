import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"], // Poppins
        display: ["var(--font-display)"], // Livvic
        second: ["var(--font-second)"], // Borel
      },
    },
  },
  plugins: [],
};

export default config;
