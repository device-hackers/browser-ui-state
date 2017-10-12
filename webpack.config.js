const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
//const webpack = require('webpack')

module.exports = {
    entry: {
        demo: './src/demo/index.js',
        'browser-ui-state': './src/browser-ui-state/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'index.html' },
            { from: 'src/demo' }
        ], { ignore: ['*.js'] })
        //TBD:
        /*, new HtmlWebpackPlugin({
            template: 'index.html'
        })*/
        //https://stackoverflow.com/questions/45384170/how-to-fix-modules-with-moduleconcatenation-bailout-module-is-not-an-ecmascrip
        //, new webpack.optimize.ModuleConcatenationPlugin()
    ]/*,
    stats: {
        // Examine all modules
        maxModules: Infinity,
        // Display bailout reasons
        optimizationBailout: true
    }*/
}
