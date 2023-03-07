import { defineConfig } from '@stylify/astro';

export default defineConfig({
	compiler: {
		mangleSelectors: false,
		replaceVariablesByCssVariables: true,
		externalVariables: [
			(variable) => variable.startsWith('miles-font') ? true : undefined
		],
		variables: {
			theme: 'light',
			brand: '#00326b',
			white: '#f4f4f5',
			text: '#0d0f12',
			'text-2': '#16191d',
			surface: '#afcfe2',
			'surface-2': '#76c2da',
			'gradient-lei': 'linear-gradient(to left, dodgerblue 5%, darkviolet 75%, deeppink 100%)',

			dark: {
				// Theme overrides
				theme: 'dark',
				white: '#e1e1e3',
				text: '#f8f9fa',
				'text-2': '#f1f3f5',
				surface: '#05070f',
				'surface-2': '#0a0d18',
				'gradient-lei': 'linear-gradient(to left, deepskyblue 0%, violet 75%, deeppink 100%)',
			},

			'prose-width': '75ch',

			radius: '5px',

			'shadow-color': '220 3% 15%',
			shadow: `
				0 3px 5px -2px hsl(var(--shadow-color) / 4%),
				0 7px 14px -5px hsl(var(--shadow-color) / 6%)
			`,

			// Based on Open-Props
			'font-size-00': '.5rem',
			'font-size-0': '.75rem',
			'font-size-1': '1rem',
			'font-size-2': '1.1rem',
			'font-size-3': '1.25rem',
			'font-size-4': '1.5rem',
			'font-size-5': '2rem',
			'font-size-6': '2.5rem',
			'font-size-7': '3rem',
			'font-size-8': '3.5rem',

			// Based on Open-Props
			'font-lineheight-00': '.95',
			'font-lineheight-0': '1.1',
			'font-lineheight-1': '1.25',
			'font-lineheight-2': '1.375',
			'font-lineheight-3': '1.5',
			'font-lineheight-4': '1.75',
			'font-lineheight-5': '2',
		},
		components: {
			card: `
				display:flex flex-direction:column
				border:1px_solid_$brand border-radius:$radius
				padding:0.5rem
				box-shadow:$shadow
			`,
			container: 'width:100% xl:max-width:1280px margin:0_auto',
			transparent: 'background-color:transparent',

			'font-logo': `
				font-family:$miles-font-logo font-variant-caps:small-caps
				font-size:28px line-height:0.9em
				color:#fff text-shadow:-2px_2px_2px_black
				text-decoration:none
			`,
			'font-text': 'font-family:$miles-font-text',
			'font-script': 'font-family:$miles-font-script',

			prose: `
				max-width:$prose-width
				color:$text
				p {
					margin-bottom:1.5rem
				}
			`,

			'sr-only': `
				position:absolute height:1px width:1px
				overflow:hidden clip:rect(0,0,0,0)
				border:0 padding:0 margin:1px
			`,
		},
		customSelectors: {
			// CSS Reset
			'*, *::before, *::after': 'box-sizing:border-box',
			'*': 'margin:0 accent-color:$brand',
			'html, body': 'height:100%',
			'body': 'line-height:1.5',
			'img, picture, video, canvas, svg': 'display:block max-width:100%',
			'input, button, textarea, select': 'font:inherit',
			'p, h1, h2, h3, h4, h5, h6': 'overflow-wrap:break-word',

			// Header text sizing
			'h1,.h1': 'font-size:$font-size-8 line-height:$font-lineheight-1',
			'h2,.h2': 'font-size:$font-size-7 line-height:$font-lineheight-1',
			'h3,.h3': 'font-size:$font-size-6 line-height:$font-lineheight-2',
			'h4,.h4': 'font-size:$font-size-5 line-height:$font-lineheight-2',
			'h5,.h5': 'font-size:$font-size-4 line-height:$font-lineheight-3',
			'h6,.h6': 'font-size:$font-size-3 line-height:$font-lineheight-3',
		},
	},
});
