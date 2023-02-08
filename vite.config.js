import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  mode: "development",
  build: {
    minify: false,
  },
});
