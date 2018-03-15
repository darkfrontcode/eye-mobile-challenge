import * as path from 'path'
import * as webpack from 'webpack'
import * as copy from 'copy-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

export default new Object({

	entry: {
		app: path.join(__dirname, './source/ts/index.ts')
	},

	output: {

		path: path.join(__dirname, './build'),
		filename: "[name].js",
	},

	resolve: {

		extensions: ['.js', '.ts', '.pug', '.styl']

	},

	module: {

		exprContextCritical: false,

		rules: [

			{
				test: /\.styl$/,
				use: [
					'style-loader',
					{ 
						loader: 'css-loader', 
						options: { 
							sourceMap: true,
							importLoaders: 1
						}
					},
					{
						loader: 'postcss-loader',
						options: { sourceMap: true }
					},
					{
						loader: 'stylus-loader'
					}
				]
			},
			{
				include: /\.pug/,
				use: 'pug-loader'
			}

		]
	},

	plugins: [

		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

		new HtmlWebpackPlugin({
			template: path.join(__dirname, './source/pug/index.pug'),
			filename: 'index.html',
			inject: true
		}),

		new copy([
			{
				from: path.join(__dirname, './source/assets'),
				to: path.join(__dirname, './build/assets')
			}
		]),

	],

	devServer: {
		open: true,
		historyApiFallback: true,
		inline: true,
		hot: true,
		stats: {
			colors: true
		}
	}

})