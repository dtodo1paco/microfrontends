const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const deps = require('./package.json').dependencies;

const { NODE_ENV } = process.env;

module.exports = (env) => {
  console.log('Environment: ', env);
  
  return {
    entry: './src/index.ts',
    mode: NODE_ENV,
    devServer: {
      contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'public')],
      port: 3002,
    },
    output: {
      publicPath: 'http://localhost:3002/',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx|ts)$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            "css-modules-typescript-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app2',
        library: { type: 'var', name: 'app2' },
        filename: 'remoteEntry.js',
        exposes: {
          // expose each component
          './RandomPet': './src/components/RandomPet',
        },
        shared: {
          ...deps,
          react: { singleton: true, eager: true, requiredVersion: deps.react },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: deps['react-dom'],
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new InterpolateHtmlPlugin({
        PUBLIC_URL: `${NODE_ENV === 'development' ? '' : 'public'}`,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public', to: 'public' },
        ],
      })
    ],
  }
}

