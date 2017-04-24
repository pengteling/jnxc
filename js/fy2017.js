if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy2017.html');

}

;
require("./../sass/fy2017.scss");

require("jquery");
// require("./superslide/jquery.SuperSlide.2.1.2.js");
// // require("./smoothscroll/jquery.smooth-scroll.js")
// require("./pJqueryAppearAnimateCSS3/jac.js"); //动画







// $(function() {
// 	function resize() {
// 	    var pr = ($(window).width()) / 750;
// 	    $("html").css("font-size", 625 * pr + "%");	    
// 	}
// 	resize();
// 	$(window).load(function() {
// 	    resize();
// 	})
// 	$(window).resize(function() {
// 	    resize();
// 	});

// });
