import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import solidPlugin from "vite-plugin-solid";
import UnoCSS from "unocss/vite";

export default defineConfig({
	plugins: [solidPlugin(), UnoCSS(), eslint()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
		outDir: "docs",
	},
});
