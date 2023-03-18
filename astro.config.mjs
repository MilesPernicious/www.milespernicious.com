import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import stylify from '@stylify/astro';
import stylifyConfig from './stylify.config.mjs';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.milespernicious.com',
	trailingSlash: "always",

	integrations: [
		mdx(),
		sitemap({
			filter: (page) => page !== 'https://www.milespernicious.com/contact/mahalo/',
		}),
		stylify(stylifyConfig),
	],
	publicDir: "./assets",
	vite: {
		define: {
			APP_VERSION: JSON.stringify(process.env.npm_package_version),
		},
	},
});
