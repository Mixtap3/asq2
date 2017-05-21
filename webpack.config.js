var path = require("path");

//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
    devtool: 'eval-source-map',
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            },{
            test: /\.json?$/,
            loader: 'json-loader'
            },{
            test: /\.css$/,
            loader: 'json-loader'
            },{
            test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/, 
            loader: 'url-loader?limit=10000' 
            },{
            test: /\.svg$/,
            loader: 'svg-loader?pngScale=2'     
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
    })
    ]

};

module.exports = config;