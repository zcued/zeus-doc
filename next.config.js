const withLess = require('@zeit/next-less'),
  widthTs = require('@zeit/next-typescript'),
  path = require('path');
module.exports = widthTs(withLess({
  pageExtensions: ['jsx', 'js', 'mdsx'],
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.(mdsx)$/,
        use: ['next-babel-loader', 'zeus-md-next-loader', 'zeus-md-loader']
      }
    );
    return config;
  }
}))
