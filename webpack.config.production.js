const { resolve } = require('path')
const webpack = require('webpack')
const aliases = require('./aliases')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WebpackMonitor = require('webpack-monitor');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

module.exports = {
    entry: [
        resolve(__dirname, 'src/index.jsx')
    ],
    output: {
        filename: '[name].js?t=' + new Date().getTime(),
        chunkFilename: '[name]-chunk.js?t=' + new Date().getTime(),
        path: resolve(__dirname, 'build'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
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
                test: /\.es6$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env'],
                    plugins: [
                        'transform-object-rest-spread', 'transform-es2015-arrow-functions', 'transform-class-properties'
                    ]
                },
                include: resolve(__dirname, 'src')
            },
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'env'],
                    plugins: [
                        'transform-object-rest-spread', 'transform-es2015-arrow-functions', 'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss?$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader!sass-loader', options: { minimize: true } }
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf|svg|ico)$/,
                loaders: [
                    "file-loader?context=public&name=./dist/[path][name].[ext]"
                ]
            },
            {
                test: /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            hash: true,
            environment: process.env.NODE_ENV,
            template: resolve(__dirname, 'src/html/index.html'),
            filename: 'index.html',
            excludeChunks: ['base'],
            minify: {
                collapseWhitespace: true,
                collapseInlineTagWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true
            }
        }),
        new CleanWebpackPlugin('build/*.*'),
        new ExtractTextPlugin('bundle.css', {
            allowChunks: true
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new PreloadWebpackPlugin({
            rel: 'preload',
            as: 'script',
            allChunks: true,

            fileBlacklist: [/\.(css|map)$/, /base?.+/]
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
                ecma: 8,
                compress: {
                    warnings: false
                }
            },
            output: {
                comments: false
            }
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.[chunkhash].js',
            minChunks(module) {
                return module.context && module.context.indexOf('node_modules') >= 0;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            minChunks: 3
        }),
        new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
            threshold: 10240,
            minRatio: 0.8
        }),
        new WebpackMonitor({
            capture: true, // -> default 'true'
            target: '../monitor/myStatsStore.json', // default -> '../monitor/stats.json'
            launch: true, // -> default 'false'
            port: 3030, // default -> 8081
            excludeSourceMaps: true // default 'true'
        })
    ]
}
