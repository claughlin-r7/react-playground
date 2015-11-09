var webpack = require('webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: false,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        reporters: ['dots'],
        webpack: {
            module: {
                loaders: [
                    {test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            },
            watch: true,
            resolve: {
                root: './src',
                extensions: ['', '.js'],
                modulesDirectories: ['node_modules', 'src/js']
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};
