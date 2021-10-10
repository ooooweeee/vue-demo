const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/i,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.less$/i,
        include: [
          /node_modules\/ant-design-vue/,
          path.resolve(__dirname, 'src/')
        ],
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
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
  plugins: [new VueLoaderPlugin(), new AntdDayjsWebpackPlugin()]
}
