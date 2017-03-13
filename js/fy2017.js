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

	var timeCount=60;
    var timed;	
	var timedMsg = function () {
            if(timeCount > 0){
                $(".btn-send").html(timeCount+'秒');
                //console.log(timeCount);
                timeCount--;
                timed = setTimeout(timedMsg,1000);
            } else {
                clearTimeout(timed);
                $(".btn-send").html("发送验证码");
                $(".btn-send").prop("disabled",false);
                timeCount =60;		
            }
    };

    var randnum = parseInt(Math.random()*10 +1) ;
	var numberd;	
	var m;
	var s;
    var descTime = function(){
		if(randnum>0){
			var randnum_y = randnum;
			randnum--;
			numberd = setTimeout(descTime,1000);
			m = Math.floor(randnum / 10);
			console.log(m);
			s = randnum -m*10;


			var m1 = Math.floor(randnum_y / 10);
			var s1 = randnum_y -m1*10;
			$(".desctime-box .m").removeClass("n"+m1).addClass("n"+m);
			$(".desctime-box .s").removeClass("n"+s1).addClass("n"+s);

			console.log(randnum);
		}else{
			clearTimeout(numberd);
			console.log("倒计时结束");
			//window.location.href="down-enter.html";
			$(".desctime-box").hide();
			$(".wrong-box").show();
			
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
			timedMsg();
		}
	});
	$(".btns a").on("click",function(e){
		console.log("点击下载");
		e.preventDefault();
		e.stopPropagation();
		$(".mask").show();
		//$(".wrong-box").show();
		randnum = parseInt(Math.random()*10 +1) ;
		$(".desctime-box").show();
		descTime();
	});

	$("#getdownurl").on("click",function(e){
		//获取下载地址点击
		e.preventDefault();
		e.stopPropagation();
		if($(".ipt-smscode").val().length<4){
			//
			alert("请输入验证码");
		}else{
			//这里是ajax判断验证码的功能
			//$(".wrong-box").hide();
			//$(".desctime-box").show();
			//descTime();

			window.location.href="down-enter.html";
		}
	});
	$(".close").click(function(){
		$(".wrong-box").hide();
		$(".desctime-box").hide();
		$(".mask").hide();
		if(numberd){
			clearTimeout(numberd);
		}
	})
});



