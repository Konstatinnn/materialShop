import path from 'path';
import webpack from 'webpack';
import DotenvWebpackPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

type Mode = 'production' | 'development';

interface EnvVars {
  mode: Mode;
}

export default (env: EnvVars) => {
  const config: webpack.Configuration = {
    mode: env.mode || 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
      clean: true,
      publicPath: env.mode == 'production' ? './' : '/',
    },
    devServer: {
      hot: true,
      static: {
        directory: path.join(__dirname, 'src'),
      },
      compress: true,
      port: 3002,
      historyApiFallback: true,
    },
    module: {
      rules: [
        { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
        {
          test: /\.module\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                importLoaders: 1,
              },
            },
            'sass-loader',
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /\.module\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new DotenvWebpackPlugin(),
    ],
    resolve: {
      alias: {
        '@core': path.resolve(__dirname, 'src/core/'),
        '@modules': path.resolve(__dirname, 'src/modules/'),
        '@shared': path.resolve(__dirname, 'src/shared/'),
      },
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };

  return config;
};
