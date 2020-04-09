const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    zer: path.resolve("./src/index.styl")
  },
  output: {
    path: path.resolve(__dirname),
    filename: "zer.js"
  },
  resolve: {
    extensions: [".css", ".styl", ".woff"]
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|svg|eot|svg|ttf|woff|woff2|ico)$/,
        loader: "url-loader"
      },
      {
        test: /\.(styl|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "stylus-loader"
          }
        ]
      }
    ]
  },
  performance: {
    hints: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
