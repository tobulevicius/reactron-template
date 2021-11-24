const nodeExternals = require("webpack-node-externals");

module.exports = {
	style: {
		postcss: {
		plugins: [
			require('tailwindcss'),
			require('autoprefixer'),
		],
		},
	},
}