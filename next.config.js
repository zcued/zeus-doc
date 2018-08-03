const withLess = require('@zeit/next-less'),
  path = require('path');
module.exports = withLess({
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
})
