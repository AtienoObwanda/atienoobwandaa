import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig(({ mode }) => {
  

  return {
    // server: {
    //   port: 3000,
    // },
    build: {
      outDir: "build",
    },
    plugins: [
      // tsconfigPaths(),
      react(),
    ],
  };
});