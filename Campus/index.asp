<%Response.Expires = -1
Response.ExpiresAbsolute = Now() - 1
Response.cachecontrol = "no-cache"
%><!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit">		
  <meta name="apple-mobile-web-app-capable" content="no">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="keywords" content="重庆校服,巴蜀校服,校服,新闻1+1致青春,校服英伦风,巴蜀中学校服,校服制作,校园精灵,重庆青于蓝,重庆青于蓝服饰有限公司" />
  <meta name="description" content="2014年3月，重庆巴蜀中学的校服得到全国关注。这款校服由家长代表、学生代表及老师组成的评议团，采取公开对外招投标，各个厂家来进行展示，进行公开投票采纳的。最终，各方确定了一套融入了学校特色文化的英伦式校服和一套运动服：男生穿白边翻领黑色小西装，内配灰白衬衣加紫色斜条纹领带；女生着白色桃尖背心，外加格子齐膝短裙。青春、时尚、靓丽的设计，备受学生青睐。这里是重庆巴蜀中学校服在线零售平台,校服厂家联络人：殷海霞 15320890416" />
	<title>巴蜀中学校服-在线零售-校园精灵</title>
	<!-- head 中 -->
	<!-- 校园精灵-校服零售在线订购 -->
<link rel="stylesheet" href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/0.8.0/css/jquery-weui.min.css">
<style>
	.logo{
		width:80%;
		margin: 0 auto;
		height: 5rem;
		background: url(../images/campus/logo.png) top center  no-repeat;
		/* background-size: 100% 100%; */
		background-size: contain;
	}
	#pay,#pay2{
		color:#c00;
		font-size: 1rem;
	}
	.weui_msg{
		display: none;
	}
</style>
</head>
<body>
<div class="logo"></div>

<div class="weui_cells weui_cells_form">

<div class="weui_cell weui_cell_select">

	<div class="weui_cell_bd weui_cell_primary">
      <select class="weui_select" name="school" id="school">
        <option selected="" value="">请选择学校或校区</option>        
        <option value="巴蜀中学高2019级">巴蜀中学高2019级</option> 
        <option value="巴蜀中学高2018级">巴蜀中学高2018级</option>
        <option value="巴蜀中学高2017级">巴蜀中学高2017级</option>       
        <option value="巴蜀中学初2019级">巴蜀中学初2019级</option>
		 <option value="巴蜀中学初2018级">巴蜀中学初2018级</option>
		  <option value="巴蜀中学初2017级">巴蜀中学初2017级</option>
      <!--   <option value="奉节巴蜀">奉节巴蜀</option>
      <option value="大学城一小">大学城一小</option>
      <option value="石新路小学">石新路小学</option> -->
      </select>
    </div>
  </div>

<div class="weui_cell weui_cell_select">
  <div class="weui_cell_bd weui_cell_primary">
      <select class="weui_select" name="sex" id="sex">
        <option selected="" value="-1">请选择性别</option>
        <option value="1">男</option>
        <option value="0">女</option>        
      </select>
    </div>
  </div>

<div class="weui_cell weui_cell_select">
  <div class="weui_cell_bd weui_cell_primary">
      <select class="weui_select" name="typeno" id="typeno">
        <option selected="" value="0">请选择型号</option>
        <option value="150">150</option>
        <option value="155">155</option>        
        <option value="160">160</option>
        <option value="165">165</option>        
        <option value="170">170</option>
        <option value="175">175</option>        
        <option value="180">180</option>
        <option value="185">185</option>        
        <option value="190">190</option>
        <option value="195">195</option>        
        <option value="200">200</option>
        <option value="205">205</option>        
        <option value="210">210</option>  
      </select>
    </div>
  </div>

<div class="weui_cells_title">选择衣服</div>
  
  <div class="weui_cell weui_cell_select">
  <div class="weui_cell_bd weui_cell_primary">
      <select class="weui_select" name="sport" id="sport">
        <option selected="" value="0">运动服（每套 ￥145）</option>
        <option value="1">运动服1套</option>
        <option value="2">运动服2套</option>       
      </select>    


      <select class="weui_select" name="t_shirt" id="t_shirt">
        <option selected="" value="0">短袖T恤（每件 ￥50）</option>
        <option value="1">短袖T恤1件</option>
        <option value="2">短袖T恤2件</option>       
      </select>

      <select class="weui_select" name="shirt" id="shirt">
        <option selected="" value="0">秋季衬衣（每件 ￥67）</option>
        <option value="1">秋季衬衣1件</option>
        <option value="2">秋季衬衣2件</option>       
      </select>  


      <select class="weui_select" name="trousers" id="trousers">
        <option selected="" value="0">秋季长裤（每条 ￥68）</option>
        <option value="1">秋季长裤1件</option>
        <option value="2">秋季长裤2件</option>       
      </select>  

	<select class="weui_select" name="skirt" id="skirt">
        <option selected="" value="0">秋季短裙（每条 ￥68）</option>
        <option value="1">女裙1件</option>
        <option value="2">女裙2件</option>       
      </select>

      <select class="weui_select" name="suit" id="suit">
        <option selected="" value="0">西装外套（每件 ￥130）</option>
        <option value="1">西装外套1件</option>
        <option value="2">西装外套2件</option>       
      </select>  

      <select class="weui_select" name="vest" id="vest">
        <option selected="" value="0">毛衣背心（每件 ￥85）</option>
        <option value="1">毛衣背心1件</option>
        <option value="2">毛衣背心2件</option>       
      </select>  

      <select class="weui_select" name="tie" id="tie">
        <option selected="" value="0">领带（每条 ￥5）</option>
        <option value="1">领带1条</option>
             
      </select>  

      <select class="weui_select" name="belt" id="belt">
        <option selected="" value="0">腰带（每条 ￥10）</option>
        <option value="1">腰带1条</option>
               
      </select>  
      

		  
    </div>
  </div>

  <div class="weui_cell">
    <div class="weui_cell_hd"><label class="weui_label">姓名</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="text" placeholder="收货人姓名" name="username" id="username">
    </div>
  </div>

  <div class="weui_cell ">
    <div class="weui_cell_hd"><label class="weui_label">手机号</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="number" placeholder="请输入手机号" name="mobile" id="mobile">
    </div>
    <div class="weui_cell_ft">
      
    </div>
  </div>
  <div class="weui_cells_title">默认发顺丰，首重11元，续重1kg加2元。</div>
  <div class="weui_cell weui_cell_switch">
    <div class="weui_cell_hd weui_cell_primary">运费到付</div>
    <div class="weui_cell_bd weui_cell_primary">
     <input class="weui_switch" type="checkbox" id="freight">
    </div>
    <div class="weui_cell_ft">
      
    </div>
  </div>
  <div class="weui_cells_title">你需要付款： ￥<span id="pay">0</span>元（含运费<span id="pay_freight"></span>）。注：买齐全套赠送领带和腰带，如有疑问请咨询15320890416 殷海霞 或者加微信号15320890416。</div> 
  <!-- <div>
  	<img src="images/campus/pay.png" style="width:20em" alt="">
  </div> -->
  <!-- <div class="weui_cell">
    <div class="weui_cell_hd"><label for="" class="weui_label">日期</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="date" value="">
    </div>
  </div>
  <div class="weui_cell">
    <div class="weui_cell_hd"><label for="" class="weui_label">时间</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="datetime-local" value="" placeholder="">
    </div>
  </div>
  <div class="weui_cell weui_cell_select">
    <div class="weui_cell_bd weui_cell_primary">
      <select class="weui_select" name="select1">
        <option selected="" value="0">选择</option>
        <option value="1">微信号</option>
        <option value="2">QQ号</option>
        <option value="3">Email</option>
      </select>
    </div>
  </div>
  </div> -->
<div class="weui_cells_title">地址</div>
<div class="weui_cells weui_cells_form">
  <div class="weui_cell">
    <div class="weui_cell_bd weui_cell_primary">
      <textarea class="weui_textarea" placeholder="请在这里输入您的详细收货地址，如遇个别衣服需要的型号不一致，也请在这里添加备注" rows="3" id="addr" name="addr"></textarea>
      <div class="weui_textarea_counter"><span>0</span>/200</div>
    </div>
  </div>
</div>
<!-- <div id="dginfo"></div> -->
<div  class="weui_cells_title">
<a href="javascript:;" class="weui_btn weui_btn_primary" id="submit">确定</a>
<a href="./news.asp" class="weui_btn weui_btn_primary">了解我们的校服</a>
</div>


<!-- <div class="weui_msg">
  <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
  <div class="weui_text_area">
    <h2 class="weui_msg_title">操作成功</h2>
    <p class="weui_msg_desc">内容详情，可根据实际需要安排</p>
  </div>
  <div class="weui_opr_area">
    <p class="weui_btn_area">
      <a href="javascript:;" class="weui_btn weui_btn_primary">确定</a>
      <a href="javascript:;" class="weui_btn weui_btn_default">取消</a>
    </p>
  </div>
  <div class="weui_extra_area">
    <a href="">查看详情</a>
  </div>
</div> -->
</div>

<div class="weui_msg">
  <div class="weui_icon_area"><i class="weui_icon_success weui_icon_msg"></i></div>
  <div class="weui_text_area">
    <h2 class="weui_msg_title">订购成功</h2>
    <div id="dginfo"></div>
    <div class="weui_cells_title">你需要付款： ￥<span id="pay2"></span>元。如有疑问请咨询15320890416 殷海霞 或者加微信号15320890416。</div> 
  <div>
  <p class="weui_msg_desc">请长按下面二维码在弹出菜单中点击识别图片中的二维码然后给我转账（或者加微信号15320890416），转账成功后我们会安排尽快发货，请您耐心等待！</p>
  	<img src="images/campus/pay.jpg" style="width:20em" alt="">
  </div>
  </div>

  <div class="weui_opr_area">
    <p class="weui_btn_area">
      <a href="./index.asp" class="weui_btn weui_btn_primary">继续订购</a>
      <!-- <a href="javascript:;" class="weui_btn weui_btn_default"></a> -->
      <a href="./news.asp" class="weui_btn weui_btn_primary">了解我们的校服</a>
    </p>
  </div> 
  
 <!--  
  <div class="weui_extra_area">
    订单详情：
  </div>
  -->
</div>


<!-- body 最后 -->
<script src="//cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>

<!-- 如果使用了某些拓展插件还需要额外的JS -->
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/swiper.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/city-picker.min.js"></script>
<script>
	$(function(){
		function valid_tel(mobile) {
		    var patten = new RegExp(/^1[3-9][0-9]\d{8}$/);
		    return patten.test(mobile);
		}
		var prices={
			"sport":145,
			"shirt":67,
			"suit":130,
			"vest":85,
			"trousers":68,
			"skirt":68,
			"t_shirt":50,
      "tie":5,
      "belt":10
		}
    var weights={
      "sport":1.5,
      "shirt":0.3,
      "suit":0.8,
      "vest":0.4,
      "trousers":0.4,
      "skirt":0.3,
      "t_shirt":0.2,
      "tie":0.1,
      "belt":0.1
    }

		var freight=0;
		function payall(){
			var sport_num = $("#sport").val();
			var shirt_num = $("#shirt").val();
			var suit_num = $("#suit").val();
			var vest_num = $("#vest").val();
			var trousers_num = $("#trousers").val();
			var skirt_num = $("#skirt").val();
			var t_shirt_num = $("#t_shirt").val();
      var tie_num =$("#tie").val();
      var belt_num =$("#belt").val();
			
			if($("#freight").is(':checked')){
				//运费到付，
				freight =0;
			}else{
				
					freight=11+parseInt((sport_num*weights.sport + shirt_num*weights.shirt + t_shirt_num*weights.t_shirt + suit_num*weights.suit + vest_num*weights.vest + skirt_num*weights.skirt + trousers_num*weights.trousers + tie_num*weights.tie + belt_num*weights.belt)/2)*2;
				
			}				

			//console.log(sport_num);


      var sumall = 0;  //消费金额
      
      if(sport_num>=1 && shirt_num>=1 && suit_num>=1 && vest_num>=1 && t_shirt_num>=1 && (trousers_num>=1 || skirt_num>=1)){
        sumall = sport_num*prices.sport + shirt_num*prices.shirt + t_shirt_num*prices.t_shirt + suit_num*prices.suit + vest_num*prices.vest + skirt_num*prices.skirt + trousers_num*prices.trousers + freight;

      }
      //不购买全套则 腰带 领带分别 计算费用 
      else{
        sumall = sport_num*prices.sport + shirt_num*prices.shirt + t_shirt_num*prices.t_shirt + suit_num*prices.suit + vest_num*prices.vest + skirt_num*prices.skirt + trousers_num*prices.trousers + tie_num*prices.tie + belt_num*prices.belt + freight;
      }
      
			return sumall;
		}
    function dginfoShow(){
        var dginfo = ""+$("#school").val();
        dginfo+=$("#sex").val()==1?"男":"女";
          dginfo+=""+$("#typeno").val();
          dginfo+="&nbsp;"+($("#sport").val()>0?$("#sport option:selected").text():"");
          dginfo+="&nbsp;"+($("#shirt").val()>0?$("#shirt option:selected").text():"");
          dginfo+="&nbsp;"+($("#suit").val()>0?$("#suit option:selected").text():"");
          dginfo+="&nbsp;"+($("#vest").val()>0?$("#vest option:selected").text():"");
          dginfo+="&nbsp;"+($("#t_shirt").val()>0?$("#t_shirt option:selected").text():"");
          dginfo+="&nbsp;"+($("#skirt").val()>0?$("#skirt option:selected").text():"");
          dginfo+="&nbsp;"+($("#trousers").val()>0?$("#trousers option:selected").text():"");
          dginfo+="&nbsp;"+($("#tie").val()>0?$("#tie option:selected").text():"");
          dginfo+="&nbsp;"+($("#belt").val()>0?$("#belt option:selected").text():"");

          $("#dginfo").html("您的订购信息："+dginfo);
        }

		$("select,#freight").on("change",function(){
			$("#pay").text(payall());
			$("#pay2").text(payall());
      $("#pay_freight").text(freight);
      //dginfoShow();
		});


		$("#submit").click(function(){
			//检验
			if($("#pay").text()*1<16){
				$.toast("请至少选择一样服装", "cancel");
				$("#school").focus();
				return false;
			}
			if($("#typeno").val()<=0){
				$.toast("请选择衣服型号", "cancel");
				$("#typeno").focus();
				return false;
			}
			if($("#school").val().length<=1){
				$.toast("请选择学校或校区", "cancel");
				$("#school").focus();
				return false;
			}
			if($("#sex").val()<0){
				$.toast("请选择性别", "cancel");
				$("#sex").focus();
				return false;
			}
			if(!valid_tel($("#mobile").val())){
				$.toast("您输入的手机号码格式不对哦", "cancel");
				$("#mobile").focus();
				return false;
			}
			if($("#username").val().length<=1){
				$.toast("请输入正确的姓名", "cancel");
				$("#username").focus();
				return false;
			}
			if($("#addr").val().length<=3){
				$.toast("请输入详细收货地址", "cancel");
				$("#addr").focus();
				return false;
			}
			$.post("order.asp",{
				"school":$("#school").val(),
				"typeno":$("#typeno").val(),
				"sex":$("#sex").val(),
				"sport":$("#sport").val(),
				"shirt":$("#shirt").val(),
				"suit":$("#suit").val(),
				"vest":$("#vest").val(),
				"skirt":$("#skirt").val(),
				"trousers":$("#trousers").val(),
				"t_shirt":$("#t_shirt").val(),
        "tie":$("#tie").val(),
        "belt":$("#belt").val(),
				"money":$("#pay").text(),
				"username":$("#username").val(),
				"mobile":$("#mobile").val(),
				"addr":$("#addr").val(),
				"freight":freight, //0表示到付
				"money":$("#pay").text()

			},function(data){
				$.showLoading("正在提交中...");
				if(data=="1"){
					$("html,body").animate({scrollTop: 0}, 100);
					$(".weui_cells_form").fadeOut();
					$(".weui_msg").fadeIn();
          dginfoShow();

					$.hideLoading();
					console.log("提交成功");
				}
				else{
					$.toast("订购发生错误，请与我们联络 15320890416", "forbidden");
					$.toptip('操作失败', 'error');
				}

				

			});
			//$.showLoading();

		})


	});
</script>
	
</body>
</html>