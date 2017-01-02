var path = require('path');
var webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/assets/js/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [, {
      loader: "react-hot-loader",

      // need to exclude this dir to get loader working correctly.
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
    }, {
      loader: "babel",

      // Skip any files outside of your project's `app` directory
      include: [
        path.resolve(__dirname, "app")
      ],

      // Only run `.js` and `.jsx` files through Babel
      test: /\.jsx?$/,

      // Options to configure babel with
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      }
    }]
  }
};
