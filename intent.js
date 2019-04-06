//var v3 = new Array("yyc.xk.core", "yyc.xk.core.bzsz"); 

var fileUrl = "file:///sdcard/DCIM/Camera/VID_20190406_123334.mp4";

var i = app.intent({
    action: "VIEW",
    type: "video/*",
    data: fileUrl,
    packageName: "yyc.xk.core",
    className: "yyc.xk.core.bzsz"
});

