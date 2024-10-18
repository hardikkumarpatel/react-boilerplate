import globals from "globals";
import eslint from "@eslint/js";
import reactjs from "eslint-plugin-react";
import babeljs from "@babel/eslint-parser";

export default [
  eslint.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  {
    languageOptions: {
      globals: globals.browser,
      parser: babeljs,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        requireConfigFile: false,
      },
    },
  },
  { settings: { react: { version: "detect" } } },
  { plugins: { react: reactjs } },
  {
    rules: {
      "react/react-in-jsx-scope": "error",
      "no-unused-vars": ["error", { varsIgnorePattern: "React" }],
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
  { ignores: ["src/*.test.js", "src/**/*.test.js", "**/node_modules/"] },
];
