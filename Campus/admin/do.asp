<!--#include file="../FiveInc/conn.asp"-->
<%
if request.cookies("ptl")<>"logined" then
	response.redirect "index.asp"
	response.end()
end if

id=request("id")
act=request("act")
easp.var("nowtime")=now()
result =Easp.Db.Query("update orderlist set flag={act} , lastmodifytime={nowtime} where id={id}")
if result then
	response.write "1"
else
	response.write "0"
end if

%>