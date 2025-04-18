// webpack.config.js (issue 4)

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    scripts: './src/scripts/custom.js',
    styles: './src/styles/scss/main.scss',
  },
  output: {
    path: path.resolve(__dirname, 'deploy/dist'),
    filename: '[name].js',
    publicPath: '/dist/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'custom.css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'manifest.json',
          to: path.resolve(__dirname, 'deploy'),
          transform(content) {
            const manifest = JSON.parse(content.toString())
            manifest.key = process.env.MANIFEST_KEY
            // Enhanced debug logging
            console.log('Loaded MANIFEST_KEY:', process.env.MANIFEST_KEY)
            console.log('Environment variables:', {
              MANIFEST_KEY_EXISTS: !!process.env.MANIFEST_KEY,
              MANIFEST_KEY_LENGTH: process.env.MANIFEST_KEY?.length,
            })
            return JSON.stringify(manifest, null, 2)
          },
        },
        {
          from: 'docs/Install instructions.txt',
          to: path.resolve(__dirname, 'deploy'),
        },
        {
          from: 'docs/Install-instructions.html',
          to: path.resolve(__dirname, 'deploy'),
        },
      ],
    }),
  ],
}
