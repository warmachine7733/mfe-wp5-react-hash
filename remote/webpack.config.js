const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  output: {
    publicPath: "http://localhost:3002/",
    filename: "remotebundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App", // Exposing Button component
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: "^18.3.1" },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.3.1",
        },
        "react-router-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^6.26.0",
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
