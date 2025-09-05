// eslint.config.mts
import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Ignorer dossiers node_modules et fichiers Node
    ignores: [
      "node_modules/**",
      "build/**",
      "dist/**",
      "public/**",
      "vite.config.ts",
      "postcss.config.ts",
    ],

    // Fichiers à linter
    files: ["app/**/*.{js,ts,jsx,tsx}"],

    plugins: { js, react: reactPlugin, "@typescript-eslint": tsPlugin },

    extends: ["js/recommended", reactPlugin.configs.flat.recommended],

    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }, // ✅ force JSX detection
      },
    },

    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off", // JSX automatique React 17+
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "warn",
    },

    settings: {
      react: { version: "detect" }, // détecte automatiquement la version React
    },
  },
]);
