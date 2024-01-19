const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/main.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./js/[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|jpe?g)$/,
        type: "asset/resource",
        generator: {
          filename: "./img/[name][ext]",
        },
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //       esModule: false,
        //       name: "./img/[name].[ext]",
        //     },
        //   },
        // ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./src/css/style.css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
