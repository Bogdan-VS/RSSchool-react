module.exports = {
  module: {
    mode: 'development',
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif|ico)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name]-[sha1:hash:7].[ext]',
        },
      },
    ],
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: './src/assets',
            to: 'assets',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
  },
};
