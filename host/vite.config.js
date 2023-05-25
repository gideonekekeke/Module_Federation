import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "remote_app",
			filename: "remoteEntry.js",
			remotes: {
				remoteButton: "http://localhost:5001/dist/assets/remoteEntry.js",
			},

			shared: ["react", "react-dom"],
		}),
	],

	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
