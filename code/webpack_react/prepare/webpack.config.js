//console.log(__dirname);
module.exports = {
    //入口
    entry:'./src/js/main.js',
    output:{
        path : __dirname,
        filename : './dist/bundle.js'
    },
    module : {
        loaders : [
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除此文件夹
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    devServer:{
        contentBase: './',//内置服务器动态加载页面所在的目录
        historyApiFallback:true,//不跳转
        inline:true
    }
};