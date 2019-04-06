var encrypt;
var pwd;
var ip;
var port;
var name;


function ss_uncode(ss) {
    var num1 = ss.split("ss://")
    var num2 = num1[1].split("@")
    var num3 = num2[1].split(":")
    var num4 = num3[1].split("#")

    var token = Base64.decode(num2[0])

    var num5 = token.split(":")

    encrypt = num5[0]
    pwd = num5[1]
    ip = num3[0]
    port = num4[0]
    name = num4[1]

    log(encrypt)
    log(pwd)
    log(Base64.encode(pwd)+ "/?obfsparam")
    log(ip)
    log(port)
    log(name)
    log(decodeURI(name))
log(Base64.encode(decodeURI(name)).replace(/\+/g, "-").replace(/=/g, ""))
   
    }
    
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


    var str = "ss://YWVzLTI1Ni1jZmI6MWI2M2ZhNGQzOTk1M2NmOWE2NmY4OGMxOTMwYjM5ZDc@free-ss-vpn001.qxwo.wostore.cn:27006#%E6%AC%A2%E8%BF%8E%E5%8A%A0%E5%85%A5openvpn%E4%BA%A4%E6%B5%81%E7%BE%A4%EF%BC%8C%E7%BE%A4%E8%81%8A%E5%8F%B7%E7%A0%81%EF%BC%9A294610722";
    ss_uncode(str);
    ssr = "ssr://" + Base64.encode(ip + ":" + port + ":origin:" + encrypt + ":plain:" + Base64.encode(pwd) + "/?obfsparam=&protoparam=&remarks=" + Base64.encode(decodeURI(name)).replace(/\+/g, "-").replace(/=/g, "") + "&group=").replace(/=/g, "").replace(/\//g,"_");
    log(ssr)