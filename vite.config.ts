import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://CarlosE-23.github.io/CarlosE-23/Pokedex",
});
