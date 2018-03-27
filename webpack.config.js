const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'public/dist'),
  PUBLIC: path.resolve(__dirname, 'public'),
  JSENTRY: path.resolve(__dirname, 'src/js'),
};

// console.log(paths);

// Webpack configuration
module.exports = {
  entry: path.join(paths.JSENTRY, 'app.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

devServer: {
    contentBase: paths.PUBLIC, // this path is served as a static asset.
},
};