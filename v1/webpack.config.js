var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry:["./app.js"],
    output:{
        path: path.resolve('build/'), //source code path
        publicPath:'/public/assets/', //index.html logic path and mapping to source code path
        filename:"[name].js"//name mapping to the key(about,home,contact)
    },
    plugins:[
        commonsPlugin,
        new ExtractTextPlugin("styles.css")
    ],
    devServer:{
        contentBase:'public'
    }, // bundle file isn't actually produced and put on the disk, it's just served up virtually by the web server
    modules:{
        preLoaders:[
            {
                test:/\.js$/,
                exclude:'node_modules',
                loader:'jshint-loader'
            }
        ],
        loaders:[
            {
                test: /\.es6$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                exclue:/node_modules/,
                loader:ExtractTextPlugin.extract("style-loader", "css-loader") //run through from css-loader first and then run the result through the style-loader
            },
            {
                test:/\.less$/,
                exclue:/node_modules/,
                loader:"style-loader!css-loader!auto-prefixer-loader!less-loader"
            }
        ]
    },
    resolve:{
        extensions:['','.js','.es6']//this is for require function searching file. eg: require('./login'), require('./login.js'), require('./login.ex6')
    },
    watch:true //=wepack --watch in cmd
}