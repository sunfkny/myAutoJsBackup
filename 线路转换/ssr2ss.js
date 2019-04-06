var encrypt;
var pwd;
var ip;
var port;
var name;


function ssr_uncode(ssr) {
    var num1 = ssr.split("ssr://")
    //log(num1[1].replace(/_/g, "/"))
    var num2 = Base64.decode(num1[1].replace(/_/g, "/")).split(":")
    //log(num2[0])
    ip = num2[0]
    //log(num2[1])
    port = num2[1]
    //log(num2[3])
    encrypt = num2[3]
    var num3 = num2[5].split("/")
    //log(Base64.decode(num3[0]))
    pwd = Base64.decode(num3[0])
    var num4 = num3[1].split("&remarks=")
    var num5 = num4[1].split("&group=")
    name = encodeURI(Base64.decode(num5[0].replace(/\-/g, "+")))
    //log(name)
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


var str = "ssr://ZnJlZS1zcy12cG4wMDEucXh3by53b3N0b3JlLmNuOjI3MDA2Om9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpNV0kyTTJaaE5HUXpPVGsxTTJObU9XRTJObVk0T0dNeE9UTXdZak01WkRjQS8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPTVxeWk2TC1PNVlxZzVZV2xiM0JsYm5ad2J1UzZwT2ExZ2VlLXBPLThqT2UtcE9pQml1V1B0LWVnZ2UtOG1qSTVORFl4TURjeU1nJmdyb3VwPQ";
ssr_uncode(str);