import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];

module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"], // Расширение стандартных правил и Prettier
  rules: {
    indent: ["error", 2], // Отступы в 2 пробела
    "no-mixed-spaces-and-tabs": "error", // Запрещены смешанные пробелы и табуляции
    "space-before-blocks": ["error", "always"], // Пробел перед блоками
    "space-in-parens": ["error", "never"], // Нет пробела внутри скобок
    "comma-dangle": ["error", "always-multiline"], // Запятая в конце, если элемент в новой строке
    semi: ["error", "always"], // Обязательные точки с запятой
    quotes: ["error", "single"], // Использование одинарных кавычек
    "no-trailing-spaces": "error", // Запрещены пробелы в конце строк
    "prettier/prettier": "error", // Включение Prettier для контроля форматирования
  },
  env: {
    browser: true,
    node: true,
  },
};
