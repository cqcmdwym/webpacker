var path = require('path');

module.exports = {
    context: path.resolve('js'),
    entry:["./utils.js","./app.js"],
    output:{
        path: path.resolve('build/js/'), //source code path
        publicPath:'/public/assets/js/', //index.html logic path and mapping to source code path
        filename:"bundle.js"//build.js under build/js directory
    },

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
            }
        ]
    },
    resolve:{
        extensions:['','.js','.es6']//this is for require function searching file. eg: require('./login'), require('./login.js'), require('./login.ex6')
    },
    watch:true //=wepack --watch in cmd
}