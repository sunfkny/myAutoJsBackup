var re1 = new RegExp("SSR地址： [\\s\\S]*?article");
var re2 = new RegExp("http:\/\/[\\s\\S]*?ssr", "g");
var re3 = new RegExp("ssr:\/\/[^<]+", "g");
var re4 = new RegExp("ssr:\/\/[^\"]+", "g");

var api = "http://tool.oschina.net/action/qrcode/decode";

var r = http.get("https://github.com/gfw-breaker/ssr-accounts/blob/master/README.md");
var raw = r.body.string();
toast("抓取成功");

var temp = re1.exec(raw);
var article = temp[0];

var qr = article.match(re2);

var ssr = new Array();
ssr = article.match(re3);

var i = qr.length;
for (i = 0; i < qr.length; i++) {
  qr[i] = qr[i] + ".png";
}

var link = new Array();
var rt, rert;
i = qr.length;
toast("识别二维码");
for (i = 0; i < qr.length; i++) {
  var res = http.postMultipart(api, {
    upload_ctn: "on",
    url: qr[i]
  });
  rt = res.body.string();
  rert = rt.match(re4);
  link[i] = rert[0];
}

var ret = new Array();
for (var i = 0; i < ssr.length; i++) {
  if (ret.indexOf(ssr[i]) === -1) {
    ret.push(ssr[i]);
  }
}
for (var i = 0; i < link.length; i++) {
  if (ret.indexOf(link[i]) === -1) {
    ret.push(link[i]);
  }
}

for (i = 0; i < ret.length; i++) {
  ret[i] = "<a href=\"" + ret[i] + "\" target=\"_blank\">节点" + (i + 1) + "</a><br>";
}


if(!(files.exists("/sdcard/documents/web/g.html"))){
    files.write("/sdcard/documents/web/g.html", "");
}
//临时文件
files.write("/sdcard/documents/web/temp.html", "<h3>gfw-breaker节点列表</h3>");
for (i = 0; i < ret.length; i++) {
  files.append("/sdcard/documents/web/temp.html", ret[i]);
}

//提示是否更新成功
if (files.read("/sdcard/documents/web/temp.html") === files.read("/sdcard/documents/web/g.html")) {
  toast("无更新");
}else {
  files.write("/sdcard/documents/web/g.html", files.read("/sdcard/documents/web/temp.html"));
  toast("成功更新" + ret.length + "个节点");
}
//删除临时文件并显示抓取内容
files.remove("/sdcard/documents/web/temp.html");
//app.viewFile("/sdcard/documents/web/g.html");

/*intent->ssr
if (choice >= 0) {
  var str = list[choice];
  var ssr = app.intent({
    action: "android.intent.action.VIEW",
    category: "android.intent.category.BROWSABLE",
    data: str,
    className: "com.android.browser.BrowserActivity"
  });
  app.startActivity(ssr);
}
*/