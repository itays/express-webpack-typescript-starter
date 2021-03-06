const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        App: './src/app.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin('dist'),
    ],
    target: 'node',
    node: {
        __dirname: false,
        __filename: false
    },
    devtool: process.env.NODE_ENV === 'development' ? 'inline-source-map' : 'source-map',
    externals: [nodeExternals()]
}