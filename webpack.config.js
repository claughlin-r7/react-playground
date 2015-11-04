'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        main: './src/module'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src']
    },
    output: {
        chunkFilename:"[chunkhash].example.min.js",
        filename: "example.min.js",
        path: path.join(__dirname, "/dist"),
        libraryTarget: 'amd',
        umdNamedDefine: true,
        library: 'Example'
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'src/index.html'
        }),
        new webpack.NoErrorsPlugin()
    ],

    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true
    },
    eslint:{
        configFile:"./.eslintrc",
        emitError:true,
        failOnError:true,
        failOnWarning:false,
        formatter:require("eslint-friendly-formatter")
    }
};
