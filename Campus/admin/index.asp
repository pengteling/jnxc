<!--#include file="../FiveInc/conn.asp"-->
<!DOCTYPE html>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1,user-scalable=no"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="renderer" content="webkit">		
  	<meta name="apple-mobile-web-app-capable" content="no">
  	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<title>后台管理-校园精灵</title>
	<!-- head 中 -->
	<!-- 校园精灵-校服零售在线订购 -->
<link rel="stylesheet" href="//cdn.bootcss.com/weui/0.4.3/style/weui.min.css">
<link rel="stylesheet" href="//cdn.bootcss.com/jquery-weui/0.8.0/css/jquery-weui.min.css">
<style>
/*总容器样式*/ 
.pager { padding: 3px; text-align: center; color:#66C;font-size:2rem; font-family:Tahoma;}   
/*分页链接样式*/ 
.pager a {display: inline-block; margin: 2px; padding:2px 5px; color: #66C; text-decoration: none; border: 1px solid #aad; }   
/*分页链接鼠标移过的样式*/ 
.pager a:hover { color: #000; border: 1px solid #009; background-color:#DCDCF3; }   
/*当前页码的样式*/ 
.pager span.current { font-weight: bold; margin: 0 2px; padding: 2px 5px; color: #fff; background-color: #66C; border: 1px solid #009; }   
/*不可用分页链接的样式(比如第1页时的“上一页”链接)*/ 
.pager span.disabled { margin: 0 2px; padding: 2px 5px; color: #CCC; border: 1px solid #DDD; }   
/*跳转下拉菜单的样式*/ 
.pager select {margin: 0px 2px -2px 2px; color:#66C;font-size:2rem; font-family:Tahoma;}   
/*跳转文本框的样式*/ 
.pager input {margin: 0px 2px -2px 2px; color:#66C; border: 1px solid #DDD; padding:2px; text-align:center;font-size:2rem; font-family:Tahoma;}
</style>
</head>
<body>
<%


if request.cookies("ptl")="logined" then
	call index()

else
	call login()

end if

'response.write md5("pengteling")

sub login
%>

<div class="weui_cells weui_cells_form">
  <div class="weui_cell">
    <div class="weui_cell_hd"><label class="weui_label">用户名</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="text" placeholder="请输入用户名" name="username" id="username">
    </div>
  </div>
  <div class="weui_cell ">
    <div class="weui_cell_hd"><label class="weui_label">密码</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="password" placeholder="请输入密码" name="password" id="password">
    </div>
    
  </div>
  <div class="weui_opr_area">
    <p class="weui_btn_area">
      <a href="javascript:;" class="weui_btn weui_btn_primary" id="login">登陆</a>
      <!-- <a href="javascript:;" class="weui_btn weui_btn_default"></a> -->
    </p>
  </div> 
 </div> 

<%
end sub

sub index()

%>

<div class="weui_cells weui_cells_access">

<%
Easp.Db.PageParam = "page"
'Easp.Var("page") = 2
Easp.Db.PageSize = 1

Easp.Var("likeKey") = "%{=key}%"
if Easp.Var("likeKey")<>"" then
Set rs = Easp.Db.GetRS("select * from orderlist  where isdel=0 and  (username Like {likeKey} or  mobile Like {likeKey}) order by id desc ")
else
Set rs = Easp.Db.GetRS("select * from orderlist  where isdel=0 order by id desc ")
end if
while not rs.eof

%>
<a class="weui_cell" href="javascript:;">
    <div class="weui_cell_bd weui_cell_primary">
      <p>cell standard</p>
    </div>
    <div class="weui_cell_ft">说明文字</div>
  </a>
  <a class="weui_cell" href="javascript:;">
    <div class="weui_cell_bd weui_cell_primary">
      <p>cell standard</p>
    </div>
    <div class="weui_cell_ft">说明文字</div>
  </a>

<%

rs.movenext
wend 
rs.close
%>
  
  </div>
  <div class="pagebar">
    <%Easp.Print Easp.Db.GetPager("default")%>
  </div>

  
</div>

<%end sub%>

<!-- body 最后 -->
<script src="//cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>

<!-- 如果使用了某些拓展插件还需要额外的JS -->
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/swiper.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/city-picker.min.js"></script>
<script>
	$(function(){
		$("#login").on("click",function(e){

			
			$.post("chklogin.asp",{
				username:$("#username").val(),
				password:$("#password").val()
			},function(data){
				//alert(data);
				if(data==1){
					window.location.reload();
				}
				else{
					$.toptip('用户名或密码不正确', 'error');
				}
			})
		})

	})
</script>
</body>
</html>