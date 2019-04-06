shell("am force-stop com.tencent.mobileqq", true);
toast("已结束QQ进程");
toast("正在启动QQ");
//app.launchPackage("com.tencent.mobileqq");
shell("am start -n com.tencent.mobileqq/com.tencent.mobileqq.activity.SplashActivity",true);