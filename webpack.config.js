const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'./src/index.js', // your app's entry point
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: './index.js',
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.css$/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'postcss-loader'] },
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			files: {
				css: ['style.css'],
				js: ['index.js'],
			},
		}),
		new CopyWebpackPlugin([{ context: path.resolve(__dirname), from: '*CNAME' }]),
	],

	/* plugins: process.argv.indexOf('-p') === -1 ? [] : [
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false,
			},
		}),
	], */
};
