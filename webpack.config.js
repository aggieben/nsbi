'use strict';

module.exports = {
    context: __dirname,
    output: {
        filename: "bundle.js",
        libraryTarget: 'var',
        library: 'bitthicket'
    },
    externals: {
        lodash: '_'
    },

    devtool: "source-map",

    resolve: {
        extensions: [ '.ts', '.tsx', '.js' ]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader' }
        ]
    }
}