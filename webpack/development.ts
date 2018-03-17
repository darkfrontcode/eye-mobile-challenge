import * as webpack from 'webpack'
import * as merge from 'webpack-merge'
import common from './common'


export default merge(common, {

	plugins: [

		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),

	],

	module: {

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
			}
		]	

	},

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