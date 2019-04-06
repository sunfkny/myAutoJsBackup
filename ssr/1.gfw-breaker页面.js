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
    toast("无更新");
  } else {
    files.write("/sdcard/documents/web/g.html", files.read("/sdcard/documents/web/temp.html"));
    var head = files.read("/sdcard/documents/web/model_head.html");
    var tail = files.read("/sdcard/documents/web/model_tail.html");
    //var d=files.read("/sdcard/documents/web/d.html");
    var g = files.read("/sdcard/documents/web/g.html");
    //var doub=head+d+tail;
    var gfw_breaker = head + g + tail;
    //files.write("/sdcard/documents/web/doub.html",doub);
    files.write("/sdcard/documents/web/gfw-breaker.html", gfw_breaker);
    toastLog("节点成功写入网页");
    toast("成功更新" + ret.length + "个节点");
  }
}
files.remove("/sdcard/documents/web/temp.html");