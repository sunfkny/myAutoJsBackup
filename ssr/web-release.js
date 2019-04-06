var head=files.read("/sdcard/documents/web/model_head.html");
var tail=files.read("/sdcard/documents/web/model_tail.html");
var d=files.read("/sdcard/documents/web/d.html");
var g=files.read("/sdcard/documents/web/g.html");
var doub=head+d+tail;
var gfw_breaker=head+g+tail;
files.write("/sdcard/documents/web/doub.html",doub);
files.write("/sdcard/documents/web/gfw-breaker.html",gfw_breaker);
toastLog("节点成功写入网页");