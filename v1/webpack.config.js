var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    context: path.resolve('js'),
    entry:{
        about:"./about_page.js",
        home:"./homt_page.js",
        contact:"./contact_page.js"
    },
    output:{
        path: path.resolve('build/js/'), //source code path
        publicPath:'/public/assets/js/', //index.html logic path and mapping to source code path
        filename:"[name].js"//name mapping to the key(about,home,contact)
    },
    plugins:[
        commonsPlugin
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
                loader:"style-loader!css-loader" //run through from css-loader first and then run the result through the style-loader
            }
        ]
    },
    resolve:{
        extensions:['','.js','.es6']//this is for require function searching file. eg: require('./login'), require('./login.js'), require('./login.ex6')
    },
    watch:true //=wepack --watch in cmd
}