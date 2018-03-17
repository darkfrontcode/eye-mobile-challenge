import * as path from 'path'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as copy from 'copy-webpack-plugin'
import { data } from '../source/ts/data'

export default {

	entry: {
		app: path.join(__dirname, '../source/ts/index.ts')
	},

	output: {

		path: path.join(__dirname, '../build'),
		filename: "[name].js",
	},

	resolve: {

		extensions: ['.js', '.ts', '.pug', '.styl'],
		
	},

	module: {

		exprContextCritical: false,

		rules: [

			{
				test: /\.ts$/,
				use: 'awesome-typescript-loader'
			},
			{
				include: /\.pug/,
				use: 'pug-loader'
			}

		]
	},

	plugins: [

		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../source/pug/index.pug'),
			filename: 'index.html',
			inject: 'body',
			data
		}),

		new copy([
			{
				from: path.join(__dirname, '../source/assets'),
				to: path.join(__dirname, '../build/assets')
			},
			{
				from: path.join(__dirname, '../source/vendors'),
				to: path.join(__dirname, '../build/vendors')
			},
			{
				from: path.join(__dirname, '../source/fonts'),
				to: path.join(__dirname, '../build/fonts')
			}
		])

	]

}