if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../index.html');
    require("./../sass/style.scss");
}
;
require("./../sass/style.scss");
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画
// require("./rotate3d/do.js");
require("./superslide/jquery.SuperSlide.2.1.1.js");
//require("./superslide/TouchSlide.1.1.js");
//require("./../css/style.css");
//require("./../sass/style.scss");
//require("./../sass/style.less");



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


$(function(){
 	//jQuery(".slidebox").slide({titCell:".hd ul",mainCell:".bd", effect:"fade",autoPlay:"true",autoPage:"true"});
 	//TouchSlide({slideCell:"#slidebox",effect:"leftLoop"});
 	jQuery("#slidebox").slide({titCell:".hd ul",mainCell:".bd ul", effect:"leftLoop",autoPlay:"true",autoPage:"true"});
 	$("input[type=submit]").click(function(){
 		var mob = $(".ipt input").val();
 		var regexp = /^1([3-9])+\d{9}$/g;
 		if(regexp.test(mob)) {
 			//alert("通过");
 			return ture;
 		}
 		else{
 			alert("手机号格式不正确");
 			return false;
 		}
 	})
 })