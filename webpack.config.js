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
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
      chunkFilename: "[id]-[hash].css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname,"./src/img"), to: "img" }
      ],
    }),
  ],
  devServer: {
    port: 8083,
    host: require("os").userInfo().username == "tvbur" ? "192.168.31.199" : "localhost"
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
