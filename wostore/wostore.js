var service_ip = "/data/data/com.infinit.wostore.ui/files/service_ip.txt";
var service_port = "/data/data/com.infinit.wostore.ui/files/service_port.txt";
var service_pwd = "/data/data/com.infinit.wostore.ui/files/service_pwd.txt";
var _ip_ = "/sdcard/ip.txt";
var _port_ = "/sdcard/port.txt";
var _pwd_ = "/sdcard/pwd.txt";

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
};


shell("cp " + service_ip + " " + _ip_,true);
shell("cp " + service_port + " " + _port_,true);
shell("cp " + service_pwd + " " + _pwd_,true);

var ip = files.read(_ip_);
var port = files.read(_port_);
var pwd = files.read(_pwd_);

var encrypt = "aes-256-cfb:" + pwd;
var encoded = Base64.encode(encrypt);
var num = ip.replace(/[^0-9]/ig, "");
var ss = "ss://" + encoded + "@" + ip + ":" + port + "#wostore" + num + "%3A" + port;
var ssr="ssr://" + Base64.encode(ip+":" + port +":origin:aes-256-cfb:plain:"+Base64.encode(pwd)+"/?obfsparam=&protoparam=&remarks="+Base64.encode("wostore" + num + ":" + port)+"&group=sunfkny.github.io");
var choice=dialogs.select("选择路线类型","灰色小飞机(ss)","粉色小飞机(ssr)");
//toast(choice);
if (choice!=-1){
    if (choice==0){
        setClip(ss);
        toast("沃商店ss线路已复制到剪贴板");
    }
    if (choice==1){
        setClip(ssr);
        toast("沃商店ssr线路已复制到剪贴板");
    }
}

files.remove(_ip_);
files.remove(_port_);
files.remove(_pwd_);
