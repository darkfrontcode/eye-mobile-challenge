import * as merge from 'webpack-merge'
import * as webpack from 'webpack'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import common from './common'

export default merge(common, {

	module: {
		rules: [
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: false,
								importLoaders: 1
							}
						},
						{
							loader: 'postcss-loader',
							options: { sourceMap: false }
						},
						'stylus-loader'
					]
				})
			},
		]
	},

	plugins: [

		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress:{ warnings: false }
		}),
		new ExtractTextPlugin('[name].css'),
		new webpack.BannerPlugin("{copyright:[`DarkFrontCode`,`https://github.com/darkfrontcode/eye-mobile-challenge`]}"),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	]

})