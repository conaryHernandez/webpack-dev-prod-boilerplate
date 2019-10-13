const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    target: 'node',
    module: {
        rules: [
            {
                test: '/\.css$/',
                use: 'css-loader'
            },
            {
                test: '/\.ts$/',
                use: 'ts-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};