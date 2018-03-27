const path = require('path');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'public/dist'),
  PUBLIC: path.resolve(__dirname, 'public'),
  JSENTRY: path.resolve(__dirname, 'src/js')
};

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
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },

  devServer: {
    publicPath: '/dist/', // The bundled files will be available in the browser under this path.
    contentBase: paths.PUBLIC, // Tell the server where to serve content from. This is only necessary if you want to serve static files
    open: true, // open the app when you start server.
    port: 8080
  }
};
