import { defineConfig } from "vite";
import { join } from "path";

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [join(__dirname, "node_modules")],
      },
    },
  },
  build: {
    target: "es2020",
  },
});
