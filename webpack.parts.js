

const BabiliPlugin = require('babili-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.lintJavaScript = ({ include, exclude, options }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,
                enforce: 'pre',

                loader: 'eslint-loader',
                options,
            },
        ],
    },
});

exports.loadJavaScript = ({ include, exclude }) => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                include,
                exclude,

                loader: 'babel-loader',
                options: {
                    // Enable caching for improved performance during
                    // development.
                    // It uses default OS directory by default. If you need
                    // something more custom, pass a path to it.
                    // I.e., { cacheDirectory: '<path>' }
                    cacheDirectory: true,
                },
            },
        ],
    },
});

exports.generateSourceMaps = ({ type }) => ({
    devtool: type,
});

exports.clean = (path) => ({
    plugins: [
        new CleanWebpackPlugin([path]),
    ],
});

exports.minifyJavaScript = () => ({
    plugins: [
        new BabiliPlugin(),
    ],
});