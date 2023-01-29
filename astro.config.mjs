import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.milespernicious.com',
	integrations: [mdx()],
	publicDir: "./assets",
});
