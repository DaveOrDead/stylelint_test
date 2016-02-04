var path      = require('path')
var webpack   = require('webpack')
var stylelint = require('stylelint');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
        entry: [
            'webpack-hot-middleware/client',
            './index'
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [

            // CSS
            {
                test: /\.s(a|c)ss$/,
                loader: 'stylelint'
            },
            // JS
            // {
            //  test: /\.jsx?$/,
            //  loader: 'eslint',
            //  exclude: /node_modules/
            // }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: [ 'babel' ],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss$/,
                loader: "style!css!autoprefixer!sass",
                include: __dirname
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'url?limit=8192',
                    'img'
                    ]
            }
        ],
        eslint: {
            failOnWarning: false,
            failOnError: true
        },
        stylelint: {
            configFile: path.join(__dirname, './.stylelint.config.js')
        }
    }
}
