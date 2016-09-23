<!--#include file="../FiveInc/conn.asp"-->
<%
if request.cookies("ptl")<>"logined" then
	response.redirect "index.asp"
	response.end()
end if

id=request("id")
act=request("act")
result =Easp.Db.Query("update orderlist set flag={act} where id={id}")
if result then
	response.write "1"
else
	response.write "0"
end if

%>