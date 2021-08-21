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
      port: 3000,
    },
    output: {
      publicPath: 'http://localhost:3000/',
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
        name: 'container',
        library: { type: 'var', name: 'container' },
        remotes: {
          app1: 'app1',
          app2: 'app2',
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
        REACT_APP_APP_1_HOST: `${NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://localhost:3001'}`,
        REACT_APP_APP_2_HOST: `${NODE_ENV === 'development' ? 'http://localhost:3002' : 'http://localhost:3002'}`,
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public', to: 'public' },
        ],
      })
    ],
  }
}
