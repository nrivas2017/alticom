import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  base: "/alticom", //TODO: This is just to be able to deploy the app to Github. Remove this from here (or change it to '/') and also from the 'basename' in the <BrowserRouter> tag of the './src/App.tsx' file.
  build: {
    outDir: "dist",
  },
});
