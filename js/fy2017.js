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
	// function desctime(obj,sec){		
	// 		if (sec>1){
	// 			console.log(sec);
	// 			setTimeout(desctime(obj,sec-1).bind(this),1000);	
	// 		}
	// 		$(obj).html(sec+"秒");		
	// }
	 
	this.desctime = function(obj,sec) { 
		if(sec>1){
			console.log(this); 
			setTimeout(desctime(obj,sec-1).bind(this), 1000);//通过Function.prototype.bind 绑定当前对象 
		} 
	}
	 
		

	$(".btn-send").on("click",function(){
		var regex_tel = /^(1)[0-9]{10}$/;
		var tel = $(".ipt-mobile").val();
		if(!regex_tel.test(tel)){
			alert("请输入正确的手机号码！");
			$(".ipt-mobile").focus();
		}else{
			$(".btn-send").prop("disabled",true);
			 

			desctime($(".btn-send"),60);

		}
	})
	
});



