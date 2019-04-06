"ui";
ui.statusBarColor("#2196F3");
ui.layout(
    <scroll>
        <vertical>
            <horizontal h="55" w="*" background="#2196F3">
                <text text="线路转换" w="230" layout_gravity="center" paddingLeft="20" textColor="white" textSize="20sp"/>
                <button id="input" text="输入" w="60" layout_gravity="center" style="Widget.AppCompat.Button.Borderless" textColor="white" textSize="15sp"/>
                <button id="exit" text="退出" w="60" layout_gravity="center" style="Widget.AppCompat.Button.Borderless" textColor="white" textSize="15sp"/>
            </horizontal>
            
            <text text="" w="*" gravity="center"/>
            <text text="服务器：" w="*" margin="0 20 0 20" textColor="black" gravity="left"/>
            <text id="ip" margin="0 20 0 20" text="没有数据"/>
            <text text="端口：" w="*" margin="0 20 0 20" textColor="black" gravity="left"/>
            <text id="port" margin="0 20 0 20" text="没有数据"/>
            <text text="加密：" w="*" margin="0 20 0 20" textColor="black" gravity="left"/>
            <text id="encrypt" margin="0 20 0 20" text="没有数据"/>
            <text text="密码：" w="*" margin="0 20 0 20" textColor="black" gravity="left"/>
            <text id="pwd" margin="0 20 0 20" text="没有数据"/>
            <text text="名称：" w="*" margin="0 20 0 20" textColor="black" gravity="left"/>
            <text id="name" margin="0 20 0 20" text="没有数据"/>
            
            <text text="" w="*" gravity="center"/>
            <button id="ss" w="auto" text="灰色小飞机   （ss）" textColor="#ff7387a0" layout_gravity="center"/>
            <button id="ssr" w="auto" text="粉色小飞机（ssr）" textColor="#ffe482a3" layout_gravity="center"/>
        </vertical>
    </scroll>
);



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

ui.exit.click(function() {
    ui.finish();
});

ui.input.click(function() {
    rawInput("输入线路链接", "", str => {
        if (typeof(str) != "object") {
            if (str.search("ss:\/\/") != -1) {
                ss_uncode(str);
            } else if (str.search("ssr:\/\/") != -1) {
                ssr_uncode(str);
            } else {
                toast("输入内容不是ss或ssr线路")
            }
        }
    });
});

ui.ss.click(function() {
    setClip(ss);
    toast("ss已复制到剪贴板");
});

ui.ssr.click(function() {
    setClip(ssr);
    toast("ssr已复制到剪贴板");
});



function ssr_uncode(ssr) {
    num1 = ssr.split("ssr://")
    if (typeof(num1[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num2 = Base64.decode(num1[1].replace(/_/g, "/")).split(":");
    if (typeof(num2[0]) == "undefined" || typeof(num2[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num3 = num2[5].split("/")
    if (typeof(num3[0]) == "undefined" || typeof(num3[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num4 = num3[1].split("&remarks=")
    if (typeof(num4[0]) == "undefined" || typeof(num4[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num5 = num4[1].split("&group=")
    if (typeof(num5[0]) == "undefined" || typeof(num5[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }


    ssr_ip = num2[0]
    ssr_port = num2[1]
    ssr_encrypt = num2[3]
    ssr_pwd = Base64.decode(num3[0])
    ssr_name = Base64.decode(num5[0].replace(/\-/g, "+"))
    num6 = encodeURI(ssr_name).split("%00")
    if (typeof(num6[0]) == "undefined") {
        toast("解析失败");
        return 0;
    }

    ss_name = num6[0]
    ss_ip = ssr_ip
    ui.ip.setText(ss_ip)
    ss_port = ssr_port
    ss_encrypt = ssr_encrypt
    ss_pwd = ssr_pwd
    ss = "ss://" + Base64.encode(ss_encrypt + ":" + ss_pwd) + "@" + ss_ip + ":" + ss_port + "#" + ss_name;
    //log(ss);
    ui.encrypt.setText(ss_encrypt)
    ui.pwd.setText(ss_pwd)
    ui.ip.setText(ss_ip)
    ui.port.setText(ss_port)
    ui.name.setText(decodeURI(ss_name))

}

function ss_uncode(ss) {
    num1 = ss.split("ss://")
    if (typeof(num1[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num2 = num1[1].split("@")
    if (typeof(num2[0]) == "undefined" || typeof(num2[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num3 = num2[1].split(":")
    if (typeof(num3[0]) == "undefined" || typeof(num3[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    num4 = num3[1].split("#")
    if (typeof(num4[0]) == "undefined" || typeof(num4[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }
    token = Base64.decode(num2[0])
    num5 = token.split(":")
    if (typeof(num5[0]) == "undefined" || typeof(num5[1]) == "undefined") {
        toast("解析失败");
        return 0;
    }

    ss_encrypt = num5[0]
    ss_pwd = num5[1]
    ss_ip = num3[0]
    ss_port = num4[0]
    ss_name = num4[1]

    ssr_encrypt = ss_encrypt
    ssr_pwd = ss_pwd
    ssr_ip = ss_ip
    ssr_port = ss_port
    ssr_name = Base64.encode(decodeURI(ss_name)).replace(/\+/g, "-").replace(/=/g, "")
    ssr = "ssr://" + Base64.encode(ssr_ip + ":" + ssr_port + ":origin:" + ssr_encrypt + ":plain:" + Base64.encode(ssr_pwd) + "/?obfsparam=&protoparam=&remarks=" + ssr_name + "&group=").replace(/=/g, "").replace(/\//g, "_");
    //log(ssr);
    ui.encrypt.setText(ssr_encrypt)
    ui.pwd.setText(ssr_pwd)
    ui.ip.setText(ssr_ip)
    ui.port.setText(ssr_port)
    ui.name.setText(decodeURI(ss_name))

}

str = "";
str = getClip();
//str = "ss://YWVzLTI1Ni1jZmI6MWI2M2ZhNGQzOTk1M2NmOWE2NmY4OGMxOTMwYjM5ZDc@free-ss-vpn001.qxwo.wostore.cn:27006#%E6%AC%A2%E8%BF%8E%E5%8A%A0%E5%85%A5openvpn%E4%BA%A4%E6%B5%81%E7%BE%A4%EF%BC%8C%E7%BE%A4%E8%81%8A%E5%8F%B7%E7%A0%81%EF%BC%9A294610722";
//str = "ssr://ZnJlZS1zcy12cG4wMDEucXh3by53b3N0b3JlLmNuOjI3MDA2Om9yaWdpbjphZXMtMjU2LWNmYjpwbGFpbjpNV0kyTTJaaE5HUXpPVGsxTTJObU9XRTJObVk0T0dNeE9UTXdZak01WkRjQS8_b2Jmc3BhcmFtPSZwcm90b3BhcmFtPSZyZW1hcmtzPTVxeWk2TC1PNVlxZzVZV2xiM0JsYm5ad2J1UzZwT2ExZ2VlLXBPLThqT2UtcE9pQml1V1B0LWVnZ2UtOG1qSTVORFl4TURjeU1nJmdyb3VwPQ";
if (str.search("ss:\/\/") != -1) {
    ss_uncode(str);
} else if (str.search("ssr:\/\/") != -1) {
    ssr_uncode(str);
} else {
    toast("剪贴板没有ss或ssr线路")
}