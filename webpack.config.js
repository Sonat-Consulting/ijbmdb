var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./src/main/app.jsx"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: 'app.bundle.js'
  },

  module: {
    loaders:[{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders:  ['react-hot','babel-loader']
    }, {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.svg$/,
      loader: 'file'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
