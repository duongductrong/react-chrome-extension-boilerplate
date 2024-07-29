import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill"
import { copy } from "esbuild-plugin-copy"
import { defineConfig } from "tsup"

const tag = "chrome-extension-boilerplate-container"

export default defineConfig({
  target: "chrome112",
  format: "iife",
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: true,
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },

  entry: {
    background: "src/scripts/background/index.ts",
    content: "src/scripts/content-script/index.ts",
    "popup/index": "src/scripts/popup/index.tsx",
    "options/index": "src/scripts/options/index.tsx",
    "page/index": "src/scripts/page/index.tsx",
  },

  outExtension: () => ({ js: ".js" }),

  outDir: "dist",

  injectStyle(css, fileId) {
    return `var style = document.createElement("style");
      style.innerHTML = ${css};

      setTimeout(() => {
        if (document.head) {
          document.head.appendChild(style);

          const root = document.getElementsByTagName("${tag}")?.[0]?.shadowRoot;
          root?.appendChild?.(style);
        } else {
          document.addEventListener("DOMContentLoaded", function() {
            document.head.appendChild(style);
          });
        }
      })
    `
  },

  esbuildPlugins: [
    NodeModulesPolyfillPlugin(),
    copy({
      assets: [
        {
          from: ["./src/assets/**/*"],
          to: ["./assets"],
        },
        {
          from: "./manifest.json",
          to: "./manifest.json",
        },
        {
          from: "./src/scripts/popup/index.html",
          to: "./popup",
        },
        {
          from: "./src/scripts/options/index.html",
          to: "./options",
        },
        {
          from: "./src/scripts/page/index.html",
          to: "./page",
        },
      ],
      watch: process.env.NODE_ENV === "development",
    }),
  ],
})
