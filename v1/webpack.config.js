module.exports = {
    entry:["./utils.js","./app.js"],
    output:{
        filename:"bundle.js"
    },
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