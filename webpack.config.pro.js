var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = 'production' // 这个要写 .babel env 坑！

module.exports = {
  	entry: path.resolve(__dirname, 'app/Router.js'),
  	output: {
	  	path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
  	},
    module: {
    	loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
	            test: /\.(png|jpg|gif)$/,
	            loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
	        },
	        {
			    test: /\.css$/,
			    loader: 'style-loader!css-loader'
		    },
		    {
			    test: /\.less$/,
			    loader: 'style-loader!css-loader!less-loader'
		    }
        ]
  },
  plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production"),
                BABEL_ENV: JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
          	compressor: {
            	warnings: false,
          	},
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
			template: './app/index.html'
		})
  ]
}