const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: [
                  "last 2 versions",
                  "not dead",
                  "not < 2%",
                  "not ie 11",
                ],
                useBuiltIns: "entry",
                corejs: 2,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-syntax-dynamic-import",
          ],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node-modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },

  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
