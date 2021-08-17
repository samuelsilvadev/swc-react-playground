require("dotenv").config();

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DotEnv = require("dotenv-webpack");

const { isMockServer, ise2e } = require("./src/utils/runtime");

const BUILD_FOLDER = path.resolve(__dirname, "build");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: BUILD_FOLDER,
    filename: "index.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 3000,
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, "src/config/"),
      components: path.resolve(__dirname, "src/components/"),
      hooks: path.resolve(__dirname, "src/hooks/"),
      services: path.resolve(__dirname, "src/services/"),
      mocks: path.resolve(__dirname, "src/mocks/"),
      utils: path.resolve(__dirname, "src/utils/"),
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
    new webpack.DefinePlugin({
      "process.env.CY": JSON.stringify(process.env.CY),
    }),
    new DotEnv({
      safe: !isMockServer && !ise2e,
    }),
  ],
};
