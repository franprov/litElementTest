const path = require("path");

module.exports = {
  entry: "./web-components/display-input.js", // Specify the entry point for your application
  output: {
    filename: "display-input.js", // Name of the output bundle file
    path: path.resolve(__dirname, "dist"), // Output directory for the bundle
  },
  mode: "development",
};
