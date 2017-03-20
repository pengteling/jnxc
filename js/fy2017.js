if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy2017.html');

}

;
require("./../sass/fy2017.scss");

require("jquery");
require("./superslide/jquery.SuperSlide.2.1.2.js");
// require("./smoothscroll/jquery.smooth-scroll.js")
// require("./pJqueryAppearAnimateCSS3/jac.js"); //动画







$(function(){
	$(".im6 li").hover(function(){
		$(this).find(".layer").stop(true,true).animate({"top":"0"},300);
	},function(){
		$(this).find(".layer").stop(true,true).animate({"top":"100%"},300);
	});

	$(".slider").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,scroll:4,vis:4});

})

