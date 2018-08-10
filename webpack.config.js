const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './src/app.js',
    target: 'node',
    devtool: 'eval-source-map',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [ nodeExternals() ],
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /(node_modules)/,
                test: /\.js$/
            }
        ]
    }
}
