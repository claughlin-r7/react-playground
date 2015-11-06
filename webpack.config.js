'use strict';

var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        main: './src/js/module'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    output: {
        chunkFilename:"[chunkhash].example.min.js",
        filename: "example.min.js",
        path: path.join(__dirname, "/dist/js"),
        libraryTarget: 'amd',
        umdNamedDefine: true,
        library: 'Example',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'},
            {test: /\.scss$/, loaders: ["style", "css", "sass"]},
            {loader: "style!css", test: /\.css$/}
        ]
    },
    plugins: [
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
