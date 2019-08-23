module.exports = {
  module: {
    rules: [
      {
        test: /.pug$/,
        use: [
          { loader: 'apply-loader' },
          { loader: 'pug-loader' }
        ]
      }
    ]
  }
};
