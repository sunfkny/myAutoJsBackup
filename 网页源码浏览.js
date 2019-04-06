"ui";
cookie ="reg6_2132_saltkey=pwIiqW1f; reg6_2132_lastvisit=1513202165; reg6_2132_mobile=no; reg6_2132_sendmail=1; reg6_2132_st_p=0%7C1513611433%7C23cec7669dea6b8350538cbb472a4eef; reg6_2132_lastact=1513611469%09member.php%09logging; reg6_2132_ulastactivity=f84dJ2uzEdB0vnvCB%2BXUlKCAob%2FIUOhrVtbMnyApW%2BdJHQ5A3uFS; reg6_2132_sid=srsA82; reg6_2132_auth=35f7grOnjey%2BHu%2FS1EjRMJ8OJWWv7LE%2BngCCrem4lU%2FBvZMSaEIP2F56qLpKwQtv318BnJiG8Z8am7gtUea5qKTY31s; reg6_2132_lastcheckfeed=105173%7C1513611469; reg6_2132_checkfollow=1; reg6_2132_lip=42.91.103.254%2C1513606981";

ui.statusBarColor("#ff555555");
ui.layout(
<frame background="#ff555555">
<vertical align="top" margin="0">
 <linear h="50">
<input id="awz" w="302" bg="#ffffff" h="40" hint="输入网址。">http://www.autojs.org</input>
<button h="40" w="60" id="aok" text="浏览" />
 </linear>
<input id="text" gravity="left" size="8" bg="#ffffff" w="358" h="566" margin="0 1" hint="网页代码区"/>
</vertical>
</frame>
);
function awy(url) {
  threads.start(function() {
    try {
      var res = http.get(url, {
        headers: {
          "Cookie": cookie
        }
      });
      if (res.statusCode == 200) {
        atext = (res.body.string());
      } else {
        atext = ("请求失败:" + res.statusMessage);
      }
    } catch (e) {
      atext = "请求不到";
    }
    atext0 = 1;
  });
}
atext0 = 0;
ui.aok.click(() => {
  if (atext0 != 2) {
    atext0 = 2;
    url = ui.awz.text();
    awy(url);
    downloadId = setInterval(() => {
      if (atext0 == 1) {
        atext0 = 0;
        ui.text.text(atext);
        clearInterval(downloadId);
        return;
      }
    }, 10);
  } else {
    ui.text.text("上次获取还没结束，要等待");
  }
});
