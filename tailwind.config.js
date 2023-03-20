/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				bangers: ["Bangers", "cursive"],
				bebas: ["Bebas Neue", "cursive"],
			},
		},
	},
	plugins: [],
};
