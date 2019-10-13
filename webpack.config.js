const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: '/\.txt$/',
                use: 'raw-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};