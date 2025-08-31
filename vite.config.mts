import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command, mode }) => {
  const isTest = mode === "test";

  return {
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "app"),
        },
      ],
    },
    server: {
      port: 3000,
      open: false,
      host: true,
    },
    build: {
      outDir: "build",
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./app/setupTests.ts",
      testTimeout: 30000,
      coverage: {
        reporter: ["text", "json", "html"],
        exclude: [
          "node_modules/",
          "app/setupTests.ts",
          "**/*.d.ts",
          "**/types.ts",
        ],
      },
    },
  };
});
