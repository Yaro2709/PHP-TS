import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  { //env
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2024
      }
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { //rules
    rules: {
      "@typescript-eslint/no-var-requires": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-cond-assign": "warn",
      "no-prototype-builtins": "warn",
      "prefer-rest-params": "warn",
      "no-sparse-arrays": "warn",
      "prefer-const": "warn",
      "prefer-spread": "warn"
    }
  }
];
