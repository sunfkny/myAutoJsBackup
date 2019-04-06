var Unicode = {
    encode: function(str) {
        var res = [];
        for (var i = 0; i < str.length; i++) {
            res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
        }
        return "%"+res.join("%");
    },
    decode: function(str) {
        str = str.replace(/\\/g, "%");
        return unescape(str);
    }
}

toastLog(Unicode.encode("呵呵"))