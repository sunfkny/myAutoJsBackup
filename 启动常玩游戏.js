auto();
var num = 3;
shell("am start -n com.tencent.mobileqq/com.tencent.gamecenter.activities.GameCenterActivity", true);
sleep(5000);
//toast("开始检测");
while (num--) {
    sleep(500);
  //toast("开始截图");
  if (!requestScreenCapture()) {
    toast("请求截图失败");
    stop();
  }
  //toast("截图正常");
  var point = 0;
  var img = captureScreen();
  //toastlog("开始找色");
  //启动按钮颜色是#12b7f5
  point = findColorInRegion(img, "#12b7f5", 870, 420, 150, 580);
  if (point) {
    //toastlog(point.x + "," + point.y);
    point.x = point.x + 20;
    point.y = point.y + 20;
    //shell("input tap " + point.x + " " + point.y, true);
    click(point.x, point.y);
    sleep(500);
    toast("成功通过QQ游戏中心启动");
    sleep(300);
    stop();
  }
}
toast("启动失败");
stop();