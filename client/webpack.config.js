const currentTask = process.env.npm_lifecycle_event;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src',
  output: {
    filename: 'bundle.[fullhash].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        // keeping scss rules at idx 0 for updating in build mode (see on bottom condition)
        test: /\.s?[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            // options: {presets: [..]} are loaded from .babelrc
          },
        ],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),

    /* // only enable to add custom NODE_ENV variable with cross-env
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) },
    }),
    */

    /* // only used in build mode (see on bottom condition)
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' })
   */
  ],

  devServer: {
    historyApiFallback: true, // for react-router, always redirects to index.html no matter the path
    port: 3134,
  },

  externals: {
    /* // enable for styled-component lib
    'styled-components': {
      commonjs: 'styled-components',
      commonjs2: 'styled-components',
      amd: 'styled-components',
    },
    */
  },
};

if (currentTask === 'build') {
  config.mode = 'production';
  config.module.rules[0].use[0] = MiniCssExtractPlugin.loader;
  config.plugins.push(new MiniCssExtractPlugin({ filename: 'main.[fullhash].css' }));
}

module.exports = config;
