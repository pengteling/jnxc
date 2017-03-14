if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy2017.html');

}

;
require("./../sass/fy2017.scss");

require("jquery");
// require("./superslide/jquery.SuperSlide.2.1.2.js");
// require("./smoothscroll/jquery.smooth-scroll.js")
// require("./pJqueryAppearAnimateCSS3/jac.js"); //动画




$(function(){	
	$(".im2 li").hover(function(){
		$(this).find(".layer").fadeIn();
	},function(){
		$(this).find(".layer").fadeOut();
	});
	$(".im8 li").hover(function(){
		$(this).find(".front").fadeIn();
		$(this).find(".back").hide();
	},function(){
		$(this).find(".front").fadeOut();
		$(this).find(".back").show();
	});
	$(".im12 li").hover(function(){
		$(this).find("span").fadeIn();
	},function(){
		$(this).find("span").fadeOut();
	});
	
    
});



