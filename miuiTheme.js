var input = dialogs.rawInput();

function httpString(s) {
    var reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
    s = s.match(reg);
    return (s);
}



if (!input) {
    toast("输入为空");
    exit();
} else if (!httpString(input)) {
    toast("没有找到链接");
    exit();
} else if (input.indexOf("zhuti.xiaomi.com/detail") == -1) {
    toast("不是miui主题链接");
    exit();
}


var a = httpString(input);
var flag = a[0].lastIndexOf("/");
var id = a[0].substr(flag);

var r = http.get("http://thm.market.xiaomi.com/thm/download/v2" + id);

if (r.statusCode != 200) {
    toast("请求失败: " + r.statusCode + " " + r.statusMessage);
    exit();
}

var url = r.body.json().apiData.downloadUrl;


if (url.indexOf(".mtz") == -1) {
    toast("请求api出错");
    exit();
}


var i = app.intent({
    action: "VIEW",
    type: "text/plain",
    data: url
});
app.startActivity(i);