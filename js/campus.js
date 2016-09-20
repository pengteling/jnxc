require("./../sass/campus.scss");
if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../campus.html');
}
