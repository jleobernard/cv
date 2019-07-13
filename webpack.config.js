var path = require('path');
var dist = path.join(__dirname, './dist')

module.exports = {
  entry: "./src/app.js",
  output: {
    path: dist,
    filename: "app.min.js",
    sourceMapFilename: 'app.map'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?.*$|$)/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 9000
  }
}
