/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				slide: {
					'0%': { transform: 'translateX(-300px)' },
					'80%': { transform: 'translateX(10px)' },
					'100%': { transform: 'translateX(0px)' },
				},
			},
			animation: {
				slide: 'slide 1s ease-in-out',
			},
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
