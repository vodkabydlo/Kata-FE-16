const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname,"./src/img"), to: "img" }
      ],
    }),
  ],
  devServer: {
    port: 6666,/* chrome considers it to be an unsafe port so in order to access the server you should set special flag to be able to use the port. But since i've put so many hours in this build i want it to be 666 ( •̀ᴗ•́ )و */
  },
  module: {
    rules: [
      
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
        type: 'asset/resource',
        generator: {
            filename: './img/[name][ext]',
        },
    },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
            filename: './fonts/[name][ext]',
        },
    },
    ]
    },
};
