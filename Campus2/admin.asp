<!--#include virtual="md5.asp"-->
<%
pwd = "7619041b510678ac510678ac3056aeb2a914bc86"

if request.cookies("ptl")= md5(pwd) then

else
	call login()

end if


'response.write md5("pengteling")

sub login
%>

<div class="weui_cells weui_cells_form">
  <div class="weui_cell">
    <div class="weui_cell_hd"><label class="weui_label">qq</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="tel" placeholder="请输入qq号">
    </div>
  </div>
  <div class="weui_cell weui_vcode">
    <div class="weui_cell_hd"><label class="weui_label">验证码</label></div>
    <div class="weui_cell_bd weui_cell_primary">
      <input class="weui_input" type="number" placeholder="请输入验证码">
    </div>
    <div class="weui_cell_ft">
      <img src="/assets/img/vcode.jpg">
    </div>
  </div>
  

<%
end sub
%>