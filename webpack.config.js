const HtmlWebpackPlugin = require("html-webpack-plugin");
const HotModuleReplacementPlugin = require("html-webpack-plugin")

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path:__dirname +'/dir',
    filename: 'bundle.js',
  },
  "devtool":"source-map",
  module: {
    rules: [
      {
        "enforce": "pre",
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          "emitWarning":true,
          "failOnError": false,
          "failOnWarning": false
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use:{
          "loader":'style-loader'
        },
      },
      {
        test:/\.css$/,
        use:[
          "style-loader",'css-loader'
        ],
      }
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template:"./src/index.html",
    filename: "./index.html"
    })
  ],
};
