if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy6.html');
    
}
;

require("./../sass/fy6.scss");
require("jquery");
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画
$(function() {
	function resize() {
	    var pr = ($(window).width()) / 1080;
	    $("html").css("font-size", 625 * pr + "%");	    
	}
	resize();
	$(window).load(function() {
	    resize();
	})
	$(window).resize(function() {
	    resize();
	});

});