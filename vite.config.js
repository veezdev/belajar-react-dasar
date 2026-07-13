import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // specify multiple entry points for the build
    // this allows you to build multiple HTML files with different entry points
    rollupOptions: {
      input: {
        index: "index.html",
        hello_world: "hello-world.html",
        todolist: "todolist.html",
        kegiatan: "kegiatan.html",
        table: "table.html",
      },
    },
  },
});
