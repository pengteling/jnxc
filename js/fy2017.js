if (process.env.NODE_ENV !== 'production') { //开发环境下 raw-loader  html文件 动态加载
    require('./../fy2017.html');

}

;
require("./../sass/fy2017.scss");

require("jquery");
require("./superslide/jquery.SuperSlide.2.1.2.js");
// require("./smoothscroll/jquery.smooth-scroll.js")
require("./pJqueryAppearAnimateCSS3/jac.js"); //动画







$(function(){
	$(".im7 .im7-body table tr#hid").nextAll("tr").hide();
	$(".im7 .more").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		$(".im7 .im7-body table tr#hid").nextAll("tr").show();
	});
	$(".im-form .ipt-btn").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var isgood =true;
		var re = /^1\d{10}$/ ;
		if($(".im-form .ipt-txt").eq(0).val()==""){
			alert("请输入您的姓名！");
			isgood =false;
		}else if(!re.test( $(".im-form .ipt-txt").eq(1).val())){
			alert("您输入的手机号码格式不对哦");
			isgood =false ;
		}
		if(isgood){
			$(".im-form form").submit();
		}


	})
	

})

