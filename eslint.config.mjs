import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignorer les dossiers inutiles
  {
    ignores: [
      "**/node_modules/**",
      ".next/**",
      "dist/**",
      "coverage/**",
      "storybook-static/**",
      "prettier.config.cjs", // ← ajouté pour éviter l'erreur "module is not defined"
    ],
  },

  // Base JS + globals navigateur
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // TypeScript (règles recommandées)
  tseslint.configs.recommended,

  // React
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      // Depuis React 17+, plus besoin d'importer React pour JSX
      "react/react-in-jsx-scope": "off",
    },
  },

  // Prettier (branche formatage dans ESLint)
  pluginPrettierRecommended,
]);
