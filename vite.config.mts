import { defineConfig } from 'npm:vite@^4.0.4';
import solidPlugin from 'npm:vite-plugin-solid@^2.5.0';

import 'typesafe-i18n';
import 'solid-js';

export default defineConfig({
	build: {
		target: 'esnext',
	},
	plugins: [
		solidPlugin(),
	],
	server: {
		port: 3000,
	},
});
