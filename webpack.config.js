const { resolve } = require('path')
const webpack = require('webpack')
const aliases = require('./aliases')

var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        resolve(__dirname, 'src/index.jsx')
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '*'],
        alias: aliases
    },
    stats: {
        hash: true,
        version: true,
        timings: true,
        assets: true,
        chunks: true,
        modules: true,
        reasons: true,
        children: true,
        source: false,
        errors: true,
        errorDetails: true,
        warnings: true,
        publicPath: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env'],
                    plugins: ['transform-object-rest-spread', 'transform-class-properties']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
                test: /\.(png|jpg|jpeg|woff|woff2|eot|ttf|svg|ico)$/,
                loaders: [
                    "file-loader?context=public&name=./public/[path][name].[ext]"
                ]
            },
            {
                test: /\.json?$/,
                loader: 'json-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test:  /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'public'),
        publicPath: '/',
        historyApiFallback: {
            index: '/index.html',
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('bundle.css', {
            allowChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ]
}
