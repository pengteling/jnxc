<!--#include file="FiveInc/conn.asp"-->
<%
Function GetYYYYMMDDHHIISS(d,t)

YYYY=Year(d)
MM=Month(d)
DD=Day(d)
HH=Hour(t)
II=Minute(t)
SS=Second(t)
If Len(YYYY) =2 then
YYYY="20" & YYYY
End If
If Len(MM)=1 then
MM="0" & MM
End If
If Len(DD)=1 then
DD="0" & DD
End If
If Len(HH)=1 then
HH="0" & HH
End If
If Len(II)=1 then
II="0" & II
End If
If Len(SS)=1 then
SS="0" & SS
End If
GetYYYYMMDDHHIISS=YYYY & MM & DD & HH & II & SS
End Function

RANDOMIZE
	 ranNum=int(999*rnd)+1000
		'iddata=year(now)&month(now)&day(now)&hour(now)&minute(now)&second(now)&ranNum
		iddata = GetYYYYMMDDHHIISS(now(),now()) & ranNum
		Easp.Var("OrderNum") ="HC"&iddata

if request.form("username")<>"" then
 result = Easp.Db.Ins("orderlist", "OrderNum:{OrderNum}, school:{post.school}, sex:{post.sex},typeno:{post.typeno},username:{post.username},mobile:{post.mobile},addr:{post.addr},freight:{post.freight},money:{post.money},sport:{post.sport},shirt:{post.shirt},t_shirt:{post.t_shirt},vest:{post.vest},suit:{post.suit},skirt:{post.skirt},trousers:{post.trousers},tie:{post.tie},belt:{post.belt}")
 if result=1 then
response.write "1"
 else
response.write "0"
 end if
end if
%>