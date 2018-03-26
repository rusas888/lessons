var dev = process.env.ENV == "development";

var path = require('path');
var webpack = require('webpack');



module.exports = {
	entry: [
		'./src/index'
	],
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins: ! dev ? [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
			cutCode: JSON.stringify(true)
		})

	] : [],
	module: {
		rules: [
			{
				use: ['babel-loader'],
				include: [
					path.resolve(__dirname, 'src'),
				],
				test: /\.js$/
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
}