filePath = "/data/data/com.android.updater/shared_prefs/version_json.xml"
version_json_str = files.read(filePath)
new_version_str = version_json_str.match(/<string name="new_version">.*?<\/string>/)

if (!new_version_str) {
    toastLog("没有匹配到更新包")
} else {
    try {
        new_version = JSON.parse(new_version_str[0].replace('<string name="new_version">', '').replace('</string>', '').replace(/&quot;/gi, '"'))

        /*
        var path = "/storage/emulated/0/new_version.txt";
        var text = JSON.stringify(new_version)
        var file = open(path, "w");
        file.write(text);
        file.close();
        */

        filename = new_version.LatestRom.filename
        //var changelog = new_version.LatestRom.changelog

        n = filename.split("_")
        if (n.length == 5 && n[0] == "miui" && n[4].slice(-3) == "zip") {
            url = "http://bigota.d.miui.com/" + n[2] + "/" + filename
            var i = app.intent({
                action: "VIEW",
                type: "text/plain",
                data: url
            });
            app.startActivity(i);
        } else {
            toastLog("更新包链接不合法")
        }
    } catch (e) {
        toastLog("解析内容出错"+e)
    }

}
