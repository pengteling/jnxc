<!--#include virtual="md5.asp"-->
<%
pwd = "7619041b510678ac510678ac3056aeb2a914bc86"
username = request.form("username")
password = request.form("password")
if username="pengteling" and md5(password)=pwd then
	response.cookies("ptl")="logined"
	response.cookies("ptl").Expires  = DateAdd("h", 1, Now())
	response.write "1"
else
	response.write "0"
end if
%>