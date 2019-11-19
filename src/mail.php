<?php
print_r($_POST);
$to = "thilip@newlineinfo.com";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<div style='width: 650px;'>
<div style='width:650px;float:left;padding:0px 0px;background:#ededed;margin:0px 0px 0px 0px;line-height:0px;'><img src='http://credtechindia.com/assets/img/Email-form.jpg'></div>
<table style='border-collapse:collapse;width:100%;'>
  <tbody>
  <tr>
    <td style='text-align:left;background:#652d16;color:#fff;font-size:16px;font-weight:bold;padding:15px;'>Email</td>
    <td style='background:#f4f2f3;text-align:left;padding-left:3%;color:#383838;font-size:16px;padding:15px;'>".$_POST['email']."</td>
    <td style='background:#f4f2f3;padding:15px;'></td>
    <td style='background:#f4f2f3;padding:15px;'></td>
  </tr>
  <tr>
    <td style='text-align:left;background:#773316;color:#fff;font-size:16px;font-weight:bold;padding:15px;'>Name</td>
    <td style='background:#fbf9fa;text-align:left;padding-left:3%;color:#383838;font-size:16px;padding:15px;'>".$_POST['name']."</td>
    <td style='background:#fbf9fa;padding:15px'></td>
    <td style='background:#fbf9fa;padding:15px'></td>
  </tr>
  <tr>
    <td style='text-align:left;background:#652d16;color:#fff;font-size:16px;font-weight:bold;padding:15px;'>Phone</td>
    <td style='background:#f4f2f3;text-align:left;padding-left:3%;color:#383838;font-size:16px;padding:15px;'>".$_POST['phone']."</td>
    <td style='background:#f4f2f3;padding:15px;'></td>
    <td style='background:#f4f2f3;padding:15px;'></td>
  </tr>
  <tr>
    <td style='text-align:left;background:#773316;color:#fff;font-size:16px;font-weight:bold;padding:15px;'>Message</td>
    <td style='background:#f4f2f3;text-align:left;padding-left:3%;color:#383838;font-size:16px;padding:15px;'>".$_POST['message']."</td>
    <td style='background:#f4f2f3;padding:15px;'></td>
    <td style='background:#f4f2f3;padding:15px;'></td>
  </tr>
</tbody></table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <info@credtechindia.com>' . "\r\n";

mail($to,$subject,$message,$headers);
?> 