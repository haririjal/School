const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home | Zazel",
      template: "./src/index.html",
      minify: {
        removeRedundantAttributes: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: "Blog | Zazel",
      filename: "blog.html",
      template: "./src/views/blog.html",
    }),
    // restart server after adding new page
  ],
};
