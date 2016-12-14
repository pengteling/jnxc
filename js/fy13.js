if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy13.html');

}
;
require("./../sass/fy13.scss");
require("jquery");
require("./superslide/jquery.SuperSlide.2.1.2.js");

$(function(){
	$(".teachers").slide({
		titCell:".hd ul",
		mainCell:".bd ",
		autoPage:true,
		autoPlay:true,
		interTime:6000
	});
})