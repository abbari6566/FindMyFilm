// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Dev = "/", Prod = "/FindMyFilm/"
  base: mode === "production" ? "/FindMyFilm/" : "/",
}));
