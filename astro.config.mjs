import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import purgeCss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.milespernicious.com',
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => page !== 'https://www.milespernicious.com/contact/mahalo',
		}),
		purgeCss(),
	],
	publicDir: "./assets",
	vite: {
		define: {
			APP_VERSION: JSON.stringify(process.env.npm_package_version),
		},
	},
});
