/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				mini: { max: '360px' },
			},
			colors: {
				background: 'rgba(31, 41, 55, 0.6)',
			},
		},
	},
	plugins: [],
}
