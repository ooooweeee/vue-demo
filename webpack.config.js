const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/i,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/i,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'less-loader'
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: path.resolve(__dirname, 'src/assets/mixin.less')
            }
          }
        ]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
}
