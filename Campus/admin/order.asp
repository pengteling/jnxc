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

</style>
</head>
<body>
<%


if request.cookies("ptl")<>"logined" then
	response.redirect "index.asp"

end if
id= clng(request("id"))
set rs=Easp.Db.sel("select * from orderlist where id={id}")
if rs.eof then
  response.write "订单有误"
  response.end
end if




%>

<div class="weui_panel">
<div class="weui_panel_hd"><a href="index.asp" class="weui_btn weui_btn_mini weui_btn_primary">返回列表页</a> </div>
  <div class="weui_panel_hd">  订单详情</div>
  <div class="weui_panel_bd">
    <div class="weui_media_box weui_media_text">
      <h4 class="weui_media_title">￥<%
      response.write rs("money")
      %>（含运费：<%=rs("freight")%>）</h4>
      <p class="weui_media_desc">
      <%
      if rs("flag")=1 then 
      response.write "已付款"
      elseif rs("flag")=2 then
      response.write "已发货"
      end if
      %>
      </p>
      <div class="content-padded">
      姓名：<%=rs("username")%> <br>
      电话：<%=rs("mobile")%> <br>
      地址：<%=rs("addr")%> <br>      
      校区：<%=rs("school")%> <br>
      性别：<%if rs("sex") then response.write "男" else response.write "女" end if%> <br>
      型号：<%=rs("typeno")%> <br>
      衣服：<br>

        <%
if rs("sport")>0 then 
  response.write "运动服"&rs("sport")&"套<br>"
end if

if rs("t_shirt")>0 then 
  response.write "短袖T恤"&rs("t_shirt")&"件<br>"
end if

if rs("shirt")>0 then 
  response.write "秋季衬衣"&rs("shirt")&"件<br>"
end if

if rs("trousers")>0 then 
  response.write "秋季长裤"&rs("trousers")&"条<br>"
end if

if rs("skirt")>0 then 
  response.write "短裙"&rs("skirt")&"件<br>"
end if

if rs("suit")>0 then 
  response.write "西装外套"&rs("suit")&"件<br>"
end if

if rs("vest")>0 then 
  response.write "毛衣背心"&rs("vest")&"件<br>"
end if
if rs("tie")>0 then 
  response.write "领带"&rs("tie")&"条<br>"
end if

if rs("belt")>0 then 
  response.write "腰带"&rs("belt")&"条<br>"
end if
      %> <br>

状态：<%
 Select Case rs("flag")
		Case 0
		Response.write "[未确认付款]"
		Case 1
		Response.write "[已确认付款未发货]"
		Case 2 
		Response.write "[已发货]"
		Case 3
		Response.write "[废单]"
	  End select

%>
      </div>
      <ul class="weui_media_info">
        <li class="weui_media_info_meta">订购时间：<%=rs("addtime")%></li>
        <li class="weui_media_info_meta"></li>
        <li class="weui_media_info_meta weui_media_info_meta_extra">订单处理时间：<%=rs("lastmodifytime")%></li>
      </ul>
    </div>

  </div>
  <div class="weui_opr_area">
  <p class="weui_btn_area">
<a href="javascript:;" id="confirmpay" class="weui_btn weui_btn_warn">确认付款</a>
  <a href="javascript:;" id="confirmok" class="weui_btn weui_btn_warn">已经发货</a>
   <a href="javascript:;" id="confirmwrong" class="weui_btn weui_btn_warn">废单处理</a>
  </p>
  </div>
</div>

<%
set rs=nothing
%>


<!-- body 最后 -->
<script src="//cdn.bootcss.com/jquery/1.11.0/jquery.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/jquery-weui.min.js"></script>

<!-- 如果使用了某些拓展插件还需要额外的JS -->
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/swiper.min.js"></script>
<script src="//cdn.bootcss.com/jquery-weui/0.8.0/js/city-picker.min.js"></script>
<script>
	$(function(){
    $("#confirmpay").click(function(){

      $.confirm("确认收到货款？", function() {
  //点击确认后的回调函数
  $.post("do.asp",{
        id:<%=id%>,
        act:1
      },function(data){
        if(data==1){
  $.toast("操作成功");
        }
        else{
          $.toast("禁止操作", "forbidden");
        }

      })
  }, function() {
  //点击取消后的回调函数
  });
      
    });

    $("#confirmok").click(function(){

      $.confirm("确认已发货，订单完结？", function() {
  //点击确认后的回调函数
  $.post("do.asp",{
        id:<%=id%>,
        act:2
      },function(data){
        if(data==1){
  $.toast("操作成功");
        }
        else{
          $.toast("禁止操作", "forbidden");
        }

      })
  }, function() {
  //点击取消后的回调函数
  });
      
    });


	$("#confirmwrong").click(function(){

      $.confirm("确认废单？", function() {
  //点击确认后的回调函数
  $.post("do.asp",{
        id:<%=id%>,
        act:3
      },function(data){
        if(data==1){
  $.toast("操作成功");
        }
        else{
          $.toast("禁止操作", "forbidden");
        }

      })
  }, function() {
  //点击取消后的回调函数
  });
      
    });

		
	})
</script>
</body>
</html>