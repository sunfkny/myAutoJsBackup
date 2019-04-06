auto();
var num = 2000;
var point;
var img;
while (num--) {
    sleep(300);
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        stop();
    }
    point = "";
    img = "";
    img = captureScreen();
    //Like Bottom Color is E0245E
    //toastLog("开始找色");
    point = findColorInRegion(img, "#F56262", 570, 256, 70, 1900);
    if (point) {
        //log("x = " + point.x + ", y = " + point.y);
        shell("input tap " + point.x + " " + point.y, true);
    } else {
        //device.vibrate(10);
        //stop();
        sleep(500);
        Swipe(800, 1800, 800, 500, 500);
        sleep(2000);
    }
}