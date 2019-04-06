function count(o) {
    var t = typeof o;
    if (t == 'string') {
        return o.length;
    } else if (t == 'object') {
        var n = 0;
        for (var i in o) {
            n++;
        }
        return n;
    }
    return false;
}

var reg = new RegExp(/[￥|$|#]([a-zA-Z0-9]{8,12})[￥|$|#]/g)

//var clip = dialogs.rawInput("input")
clip = getClip()

r = clip.match(reg)

c = count(r)
if (c == 0) {
    toast("没有检测到淘口令")
} else {
    if (c == 1) {
        shell("am start -n com.taobao.etao/com.taobao.sns.app.uc.UserCenterActivity", true)
        setClip(r[0])
    } else {
        if (c > 1) {
            choice = dialogs.select("检测到:", r)
            if (choice != -1) {
                shell("am start -n com.taobao.etao/com.taobao.sns.app.uc.UserCenterActivity", true)
                setClip(r[choice])
            }
        }
    }
}