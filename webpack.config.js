const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const BUILD_FOLDER = path.resolve(__dirname, "build");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: BUILD_FOLDER,
    filename: "index.js",
  },
  devServer: {
    contentBase: BUILD_FOLDER,
    port: 3000,
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, "src/config/"),
      components: path.resolve(__dirname, "src/components/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      services: path.resolve(__dirname, "src/services/"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "swc-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new DotEnv({
      safe: true,
    }),
  ],
};
