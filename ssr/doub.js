var re1 = new RegExp("<tbody>[\\s\\S]*?<\/tbody>");
var re2 = new RegExp("ssr:\/\/[^\"]+", "g");

//get string raw code
var r = http.get("https://doub.io/sszhfx/");
var raw = r.body.string();
toast("抓取成功");

//get tbody
var temp = re1.exec(raw);
var tbody = temp[0];

//get link
var ssr= tbody.match(re2);

/*//set name
var list = new Array(),
  i = list.length;
for (i = 0; i < link.length; i++) {
  list[i] = "节点" + (i + 1);
}*/

var link = new Array();
for (var i = 0; i < ssr.length; i++) {
  if (link.indexOf(ssr[i]) === -1) {
    link.push(ssr[i]);
  }
}

for (i = 0; i < link.length; i++) {
  link[i] = "<a href=\"" + link[i] + "\" target=\"_blank\">节点" + (i + 1) + "</a><br>";
}

if(!(files.exists("/sdcard/documents/web/d.html"))){
    files.write("/sdcard/documents/web/d.html", "");
}
//临时文件
files.write("/sdcard/documents/web/temp.html", "<h2>doub节点列表</h2><h5>随缘连接，不稳定</h5>");
for (i = 0; i < link.length; i++) {
  files.append("/sdcard/documents/web/temp.html", link[i] );
}

//提示是否更新成功
if (files.read("/sdcard/documents/web/temp.html") == files.read("/sdcard/documents/web/d.html")) {
  toast("无更新");
}else {
  files.write("/sdcard/documents/web/d.html", files.read("/sdcard/documents/web/temp.html"));
  toast("成功更新" + link.length + "个节点");
}

//删除临时文件并显示抓取内容
files.remove("/sdcard/documents/web/temp.html");
//app.viewFile("/sdcard/documents/web/d.html");


  /*
  choice = dialogs.singleChoice("节点选择", list);
  log(link[choice]);

  //intent打开ssr
  if (choice >= 0) {
    var str =link[choice];
    var ssr = app.intent({
      action: "android.intent.action.VIEW",
      category: "android.intent.category.BROWSABLE",
      data: str,
      className: "com.github.shadowsocks.ProfileManagerActivity"
    });
    app.startActivity(ssr);
  }

  //intent打开浏览器
  if (choice >= 0) {
    var str = link[choice];
    var ssr = app.intent({
      action: "android.intent.action.VIEW",
      category: "android.intent.category.BROWSABLE",
      data: str,
      className: "com.android.browser.BrowserActivity"
    });
    app.startActivity(ssr);
  }
  */