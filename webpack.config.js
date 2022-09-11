const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./js/index.js",
  mode: "development",
  context: path.resolve(__dirname, "src"),
  output: {
    filename: "[name]-[contenthash].js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Consortium of Poor Shoplifters",
      template: "./index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    port: 6666,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use:["file-loader"]
      } 
    ]
    },
};
