const path = require("path")

module.exports = {
  target: ['web', 'es5'],

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'fklogger',
    environment: {
      // ...
      arrowFunction: false, // <-- this line does the trick
    },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "production",
}
