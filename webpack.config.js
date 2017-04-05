const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
	entry: [`${SRC_DIR}/js/app.jsx`, `${SRC_DIR}/scss/app.scss`],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: SRC_DIR,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: SRC_DIR,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								data: `$env: ${process.env.NODE_ENV};`
							}
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [extractSass]
};
