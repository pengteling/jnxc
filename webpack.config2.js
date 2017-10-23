//cnpm install webpack webpack-dev-server --save
//cnpm install css-loader style-loader file-loader extract-text-webpack-plugin raw-loader --save-dev
//cnpm install node-sass sass-loader less-loader autoprefixer-loader --save-dev
//npm install html-webpack-plugin --save-dev
var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    resolve: {
        alias: {
            // "jquery": path.resolve(
            //     __dirname,
            //     "bower_components/jquery/dist/jquery"
            // )
            // ,
            // "flexslider": path.resolve(
            //     __dirname,
            //     'bower_components/flexslider/jquery.flexslider-min'
            // )
            //vue: 'vue/dist/vue.js'
        }
    },
    entry:
    // ["webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server", './js/index.js']
    {
        //index: ['./js/index.js'],
        //carmel: ['./js/carmel.js']
        //fy6: ['./js/fy6.js']
        // mkylogin: ['./js/mkylogin.js']
        fy20171020: ['./js/fy20171020.js']
        //fy8: ['./js/fy8.js']
        //fy13: ['./js/fy13.js']
    //campus: ['./js/campus.js']
    // ,
    // custom: ['./js/custom.js'],
    },
    output: {
        path: './fy20171020/',
        //publicPath: '/fy20171020/', //调试时
        publicPath: './../', //发布时
        filename: './js/[name].js'
    },

    //devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}')
            }

            , {
                test: /\.less$/,
                //loader: "style!css!less"
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!less?sourceMap')
            }

            , {
                test: /\.scss$/,
                //loader: "style!css!less"
                //loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!sass')
                loader: ExtractTextPlugin.extract('', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"]}!sass?sourceMap') //调试时图片

            //loader:   'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 1%"],flexbox: "false"}!sass'  //正式
            }

            , {
                test: /\.(png|jpe?g|gif|eot|svg|ttf|woff2?)$/,
                loader: "file?name=images/[name].[ext]"
            },
            {
                test: /\.html$/,
                loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
            },

            {
                test: require.resolve("jquery"),
                loader: "expose?$!expose?jQuery"
            },
            {
                test: /\.svg/,
                loader: 'svg-url-loader'
            }

        /*,{
            test: /\.woff/,
            loader: 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
        }, {
            test: /\.ttf/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.eot/,
            loader: 'file?prefix=font/'
        }, {
            test: /\.svg/,
            loader: 'file?prefix=font/'
        }*/
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //   filename:"index.html",
        //   template:"fy20171020.html",
        //   inject:false,
        //   hash:true,
        //   title:"HtmlWebpackPlugin title"
        // }),
        //提取公共commjs
        new webpack.optimize.CommonsChunkPlugin("commons", "js/commons.js"),
        //提取require的css 合并到某个文件
        new ExtractTextPlugin("./css/[name].css", {            
            allChunks: true
        }),
        // new HtmlWebpackPlugin({ // Also generate a test.html
        //     filename: 'fy2017.html',
        //     template: 'fy2017.html'
        // }),
        //jquery插件 
        // new webpack.ProvidePlugin({
        //     // "jQuery": path.resolve(
        //     //     __dirname,
        //     //     "bower_components/jquery/dist/jquery"
        //     // ),
        //     // "$": path.resolve(
        //     //     __dirname,
        //     //     "bower_components/jquery/dist/jquery"
        //     // )

        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),
        //hot
        new webpack.HotModuleReplacementPlugin()
        ,
        //定义环境 程序中判断
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //压缩js 除$ jQuery
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$', 'jQuery', 'IScroll']
            },
            compress: {
                warnings: false
            }
        })
    ]
}