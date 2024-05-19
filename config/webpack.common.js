const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const __base = path.resolve(__dirname, '..');
const __src = path.resolve(__base, 'src');

module.exports = {
    entry: path.resolve(__src, 'main.js'),
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'abz agency',
            template: path.resolve(__base, 'public/index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.png$/,
                type: 'asset/resource'
            },
        ]
    }
}