auto;
//console.show()
shell("am force-stop com.wisedu.cpdaily", true)
app.launchPackage("com.wisedu.cpdaily")
id("tv_tab_title").className("android.widget.TextView").text("消息").findOne().parent().parent().click()
sleep(500)
click("辅导员通知")
sleep(1000)

time = new Date()
if (time.getHours()<8){
    click("晨间体温检查")
}else if(time.getHours()<14){
    click("午间体温检查")
}else{
    toastLog("time error");
    device.vibrate(500);
    exit;
}

sleep(2000);

var isDetected = false;
var flag = 0;
if (!requestScreenCapture()) {
    toastLog("Capture failed");
    device.vibrate(500);    
    exit;
} else {
    log("Capture success");
}

while (flag < 6 && isDetected == false) {

    sleep(1000);
    var x = 628;
    var y = 900;
    //获取在点(x, y)处的颜色
    flag += 1;
    //log("检测次数：" + flag);
    device.vibrate(5);
    sleep(5);
    device.vibrate(5);
    var c = images.pixel(captureScreen(), x, y);
    var c_find = "#ff539cfb"
    var c_now = colors.toString(c)
    //检测在点(x, y)处是否有颜色 (模糊比较)
    var isDetected = images.detectsColor(captureScreen(), c_find, x, y);

    //显示该颜色
    var msg = "";
    msg += "c_find: " + c_find + " c_now: " + c_now
    //msg += x + "," + y + " " + colors.toString(c);
    //msg += "\nR = " + colors.red(c) + ", G = " + colors.green(c) + ", B = " + colors.blue(c);
    //msg += "\n匹配 " + c_find + " " + isDetected;
    //msg += "\nR = " + colors.red(c_find) + ", G = " + colors.green(c_find) + ", B = " + colors.blue(c_find);
    log(msg);
}

if (isDetected) {
    log("is detected");
    click(x, y);
    sleep(500)
    click(175, 1160)
    sleep(500)
    click("立即签到")
    sleep(1000)
    device.vibrate(100);
    //shell("am force-stop com.wisedu.cpdaily", true)
} else {
    sleep(500);
    toastLog("not detected");
    device.vibrate(500);
}