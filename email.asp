<%@ CODEPAGE=65001 %>

<%

frm = Request.ServerVariables("HTTP_REFERER")
if instr(frm,"carmel-chem.com")<=0 then response.end

'response.write frm

chemicalname= request.form("chemicalname")
casno= request.form("casno")
yourname= request.form("yourname")
yourmail= request.form("yourmail")

mailbody = "chemicalname:"&chemicalname &"<br>"
mailbody = mailbody& "casno:"&casno &"<br>"
mailbody = mailbody& "name:"&yourname &"<br>"
mailbody = mailbody& "email:"&yourmail &"<br>"

mailbody = mailbody& "submit-time:"&now() &"<br>"

'response.write mailbody


on Error Resume Next
Set objMail = Server.CreateObject("CDO.Message")
Set objConfig = Server.CreateObject ("CDO.Configuration")
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserverport") = 25
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendusing") = 2
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpserver") ="relay-hosting.secureserver.net"
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/smtpauthenticate") = 1
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendusername") = "support@carmel-chem.com" '这行无意思，可去掉
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/sendpassword") = "Edward@2013" '这行无意思，可去掉
objConfig.Fields("http://schemas.microsoft.com/cdo/configuration/languagecode") = "0×0804"
objConfig.Fields.Update()
Set objMail.Configuration = objConfig
objMail.Subject = "web mail - submit message from carmel-chem.com"
objMail.From = "support@carmel-chem.com" '这个发件人好重要，用126或163等的都不可以，你可以随便用xxx@godaddy.com或在godaddy处注册的域名都可以。
objMail.To = "ciacherb@gmail.com"
objMail.BodyPart.ContentTransferEncoding = "7bit"
'如果使用多國語言時，才要設定 Charset
'objMail.BodyPart.Charset = "utf-8"
objMail.BodyPart.Charset = "utf-8"
objMail.HTMLBodyPart.Charset = "utf-8"

objMail.HTMLBody = mailbody
'objMail.AddAttachment(http://xxxxxx/xxxx.xxx) '或者其他任何正确的url,包括http,ftp,file等等。
objMail.Send
Response.Write "success"
if Err <> 0 then
response.write ""&Err.Description&""
response.end
end if
%>
