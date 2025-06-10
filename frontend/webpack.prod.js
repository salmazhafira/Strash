const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // Get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const match = module.context?.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            if (!match) return 'vendor';
            
            // Get the package name
            const packageName = match[1];
            
            // Return the package name
            return `vendor.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|html|svg)$/,
      algorithm: 'gzip',
    }),
  ],
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}); 