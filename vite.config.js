import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/Portfolio/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from network
    port: 5173,       // Or any other port you prefer
  }     // Or any other port you prefer
}
);


