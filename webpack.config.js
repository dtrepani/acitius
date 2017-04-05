const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const buildDir = path.resolve(__dirname, 'public');
const srcDir = path.resolve(__dirname, 'src');
const environment = process.env.NODE_ENV || 'development';

const extractSass = new ExtractTextPlugin({ filename: 'style.css' });

module.exports = {
	entry: [`${srcDir}/js/app.jsx`, `${srcDir}/scss/app.scss`],
	output: {
		path: buildDir,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: srcDir,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: srcDir,
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
	plugins: [
		extractSass,
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(environment) } })
	]
};
