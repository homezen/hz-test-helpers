/* eslint import/unambiguous:0 */

const webpack = require('webpack')

module.exports = function(config) {
    config.set({
        browsers: ['Chrome', 'Firefox'],

        files: [
            './src/*.test.js',
            './src/**/*.test.js',
        ],

        preprocessors: {
            './src/*.test.js': ['webpack', 'sourcemap'],
            './src/**/*.test.js': ['webpack', 'sourcemap'],
        },

        frameworks: ['chai', 'mocha'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-chai',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack',
            'karma-mocha-reporter',
        ],

        reporters: ['mocha'],

        singleRun: true,

        // webpack config object
        webpack: {
            devtool: '#inline-source-map',
            plugins: [
                new webpack.IgnorePlugin(/source-map-support/),
            ],
            module: {
                rules: [{
                    test: /\.js$/,
                    use: [{
                        loader: 'babel-loader',
                    }],
                    include: [
                        /src/,
                    ],
                    exclude: [
                        /server-test\.js$/,
                    ],
                }],
            },
        },
        webpackMiddleware: {
            noInfo: true,
        },
    })
}
