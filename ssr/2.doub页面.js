var re1 = new RegExp("<tbody>[\\s\\S]*?<\/tbody>");
var re2 = new RegExp("ssr:\/\/[^\"]+", "g");

var r = http.get("https://doub.io/sszhfx/");
var raw = r.body.string();
toast("抓取成功");

var temp = re1.exec(raw);
var tbody = temp[0];

var ssr = tbody.match(re2);

var link = new Array();
for (var i = 0; i < ssr.length; i++) {
  if (link.indexOf(ssr[i]) === -1) {
    link.push(ssr[i]);
  }
}

for (i = 0; i < link.length; i++) {
  link[i] = "<a href=\"" + link[i] + "\" target=\"_blank\">节点" + (i + 1) + "</a><br>";
}

if (!(files.exists("/sdcard/documents/web/d.html"))) {
  files.write("/sdcard/documents/web/d.html", "");
}

files.write("/sdcard/documents/web/temp.html", "<h2>doub节点列表</h2><h5>随缘连接，不稳定</h5>");
for (i = 0; i < link.length; i++) {
  files.append("/sdcard/documents/web/temp.html", link[i]);
}

if (files.read("/sdcard/documents/web/temp.html") == files.read("/sdcard/documents/web/d.html")) {
  toast("无更新");
} else {
  files.write("/sdcard/documents/web/d.html", files.read("/sdcard/documents/web/temp.html"));
  var head = files.read("/sdcard/documents/web/model_head.html");
  var tail = files.read("/sdcard/documents/web/model_tail.html");
  var d = files.read("/sdcard/documents/web/d.html");
  var doub = head + d + tail;
  files.write("/sdcard/documents/web/doub.html", doub);
  /{files.write("/sdcard / Download / gfw - breaker.html ",gfw_breaker);
  toastLog("节点成功写入网页");
  toast("成功更新" + link.length + "个节点");
}

files.remove("/sdcard/documents/web/temp.html");