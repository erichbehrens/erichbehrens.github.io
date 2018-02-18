const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/index.js', // your app's entry point
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: './bundle.js',
		libraryTarget: 'umd',
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract('css-loader!postcss-loader'),
			},
		],
	},

	plugins: [
		new ExtractTextPlugin('styles.css'),
		new StaticSiteGeneratorPlugin('main'),
		new CopyWebpackPlugin([{ context: path.resolve(__dirname), from: '*CNAME' }]),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
		}),
	],
};
