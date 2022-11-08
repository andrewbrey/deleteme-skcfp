const { gray } = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				gray: {
					100: '#EFF0F0',
					200: '#D8D9D9',
					300: '#C0C3C3',
					400: '#909595',
					500: '#616868',
					600: '#575E5E',
					700: '#3A3E3E',
					800: '#2C2F2F',
					900: '#222222'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
