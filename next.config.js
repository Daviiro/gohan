/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
	i18n: {
		locales: ["pt-BR"],
		defaultLocale: "pt-BR",
	},
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	reactStrictMode: true,
	optimizeFonts: false,
};

module.exports = nextConfig;
