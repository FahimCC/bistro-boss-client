/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#4EA8DE',
				secondary: '#5E60CE',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				cinzel: ['Cinzel', 'serif'],
				// bubblegum: ['Bubblegum Sans', 'cursive'],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '3rem',
				lg: '6rem',
				xl: '6rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [require('daisyui')],
};
