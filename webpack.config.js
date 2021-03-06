const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const CircularDependencyPlugin = require('circular-dependency-plugin');

const sassRootDir = 'src/assets/scss/';

const config = {
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          },
          {
            loader: 'sass-resources-loader',
            options: {
              // Or array of paths
              resources: [
                path.resolve(__dirname, sassRootDir, 'variables.scss'),
                path.resolve(__dirname, sassRootDir, 'reset.scss')
                // path.resolve(__dirname, sassRootDir, 'styles.scss'),
              ]
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: false,
      appMountId: 'app',
      title: 'Recherche des communes',
      lang: 'fr-FR',
      mobile: true,
      baseHref: '/'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    }),
    new Dotenv()
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

let numCyclesDetected = 0;

module.exports = (env, argv) => {
  // console.log('conf : ', env, argv)
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[hash].js';
  }

  if (argv.mode === 'development') {
    config.plugins.push(
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        cwd: process.cwd(),
        onStart({ compilation }) {
          numCyclesDetected = 0;
        },
        onDetected({ module: webpackModuleRecord, paths, compilation }) {
          numCyclesDetected++;
          compilation.warnings.push(new Error(paths.join(' -> ')));
        },
        onEnd({ compilation }) {
          compilation.warnings.push(
            new Error(`Detected ${numCyclesDetected} circular dependencies`)
          );
        }
      })
    );
  }

  // test argv.mode : development ou production

  return config;
};
