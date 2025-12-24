import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";

const eslintConfig = [
  {
    ignores: ["node_modules/**", ".output/**", "dist/**", ".vinxi/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
      import: (await import("eslint-plugin-import")).default,
      "import-helpers": (await import("eslint-plugin-import-helpers")).default,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "import/order": "off",
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            "/^react/",
            "/^@tanstack/",
            "module",
            "/^~/types/",
            "/^~/lib/",
            "/^~/data/",
            "/^~/components/",
            "/^~/routes/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
