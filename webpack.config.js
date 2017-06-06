var webpack = require('webpack');

module.exports = {
    entry: './src/appNew.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    watch: true,

    module: {
        loaders: [{
            test: /\.js?/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                    "presets": ["es2015", "react"]
                }
        }]
    }

}