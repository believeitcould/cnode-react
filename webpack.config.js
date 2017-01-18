var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin') //自动打开浏览器插件

process.env.NODE_ENV = 'development' // 这个要写 .babel env 坑！

module.exports = {

  	entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/Router.js')],

  	output: {
		path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
  	},

 	devServer: {
		contentBase: './app',
		port: 3000,
		color: true,
		inline: true,
		hot: true,
		historyApiFallback: true
	},// progress 不起作用

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
		new HtmlWebpackPlugin({
    		template: './app/index.html'
    	}),
    	new webpack.DefinePlugin({
        	'process.env': {
            	NODE_ENV: JSON.stringify("development")
        	}
    	}),
		new webpack.HotModuleReplacementPlugin(), //热加载插件
		
		new OpenBrowserPlugin({ url: 'http://localhost:3000' })
  	]
}
		// new webpack.optimize.CommonsChunkPlugin('vendors','js/vendors.js'),
		// vendors:['react','react-dom','react-router','redux','react-redux']  //第三方库和框架
		// new webpack.optimize.OccurenceOrderPlugin(),
    	// new webpack.optimize.UglifyJsPlugin({
        //   	compressor: {
        //     	warnings: false,
        //   	},
        // }),