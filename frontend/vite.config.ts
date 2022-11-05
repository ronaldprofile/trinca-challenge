import { defineConfig } from "vitest/config";
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  root: "src",
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["../.test/setupTest.ts"],
    include: ["**/(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["node_modules", "dist", ".idea", ".git", ".cache"],
  },
});
