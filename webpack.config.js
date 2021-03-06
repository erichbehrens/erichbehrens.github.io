const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'./src/index.js', // your app's entry point
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: './bundle.js',
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
		new HtmlWebpackPlugin({
			template: './src/index.html',
			files: {
				css: ['style.css'],
				js: ['index.js'],
			},
		}),
	],
};
