var url = "http://tool.oschina.net/action/qrcode/decode";
var link="http://128.199.116.26/info/ssr.png";

var res = http.postMultipart(url, {
    upload_ctn: "on",
    url: link
});
//toastLog(res.body.string());
var rt=res.body.string()

var re = new RegExp("((ssr):\/\/)[^\"]+");
var link = rt.match(re);
toastLog(link[0]);