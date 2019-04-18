import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index'),
  ],
  output: {
    path: '/',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server/shared'),
        ],
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: [' ', '.js'],
  },
  node: {
    net: 'empty',
    dns: 'empty',
  },
};
