/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: "class",	
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			// dark mode
			'dm-white': '#eeeeee',
			'dm-blue-pastel': '#88ccca',
			'dm-dark-gray': '#202023',
			'dm-yellow': '#FBD38D',
			'dm-yellow-highlight': '#f6ad55',
			'dm-pink': '#EB5DB4',
			'dm-highlight-box': '#313134',
			// light mode
			'lm-purple': '#805AD5',
			'lm-purple-highlight': '#6b46c1',
			'lm-blue': '#3D7AED',
			'lm-green': '#2C7A7B',
			'lm-text-color': '#1A202C',
			'lm-bkg': '#F0E7DB',
			'lm-navbar-bkg': '#f4ede4',
		},
		extend: {
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
