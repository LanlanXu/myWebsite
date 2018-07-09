const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, dir)  // 将参数以/分隔连接
}

module.exports = {
    entry: __dirname + '/src/client/main.js', // 入口文件，main.js开始，把所有相关文件抓取，编译，输出到bundle.js中
    output: {
        path: resolve('src/server/public'),
        filename: 'bundle.[hash].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'], // 默认扩展名
        alias: {
        '@': resolve('src/client'),  // 设置路径别名
        }
    },
    externals: {
        'vue': 'Vue'  // 引入插件，外链
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'  // 将vue文件用vue-loader编译
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'] // 将css文件用loader编译
                // css-loader将css文件编译成commonjs，style-loader使用style标签，将css-loader编译的js字符串注入到html页面中
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'] // 将css文件用loader编译
                // sass-loader将sass编译成css文件，css-loader将css文件编译成commonjs，style-loader使用style标签，将css-loader编译的js字符串注入到html页面中
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader', // 低于4000B的图片会被编译成base64位，减少请求，高于的文件还是用file-loader链接的形式引入
                options: {
                    limit: 4000, // 大小低于4000B的base64位引入
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/client/index.html',
        }),
        new CleanWebpackPlugin(
            [resolve('src/server/public')],
            {
                watch: true, // 一旦重新编译时，都会重新删除一次文件
                exclude: ['static'] // 排除需要删除的文件（有些文件不需要删除）
            }
        )
    ]
};