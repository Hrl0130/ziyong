/*******************************
  公众号:木木IOS分享
关注了解更多新科技！！！
书写字典
脚本名称:书写字典
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️
群1077223830
*******************************
[rewrite_local]
^http[s]?:\/\/wxapp-a.shufazidian.com\/storm.php\/info.+$ url script-response-body https://raw.githubusercontent.com/Hrl0130/ziyong/main/shufazidian.js
[mitm] 
hostname = *.shufazidian.*
*******************************
Surge

[Script]
^http[s]?:\/\/wxapp-a.shufazidian.com\/storm.php\/info.+$ requires-body=1,max-size=0,script-path=shufazidian.js

[MITM]
hostname = *.shufazidian.*

*******************************/
var obj = JSON.parse($response.body);
    obj.data.vip= 00";
    $done({body: JSON.stringify(obj)});
