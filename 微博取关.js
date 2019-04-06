auto();
launch("com.sina.weibo");
desc("我的资料").click();
bounds(360, 457, 720, 607).click();
text("关注的人").click();
sleep(1500);
click(403, 549);
toast("请手动取关，无需二次验证");
threads.start(function() {
  while (currentActivity() == "com.sina.weibo.page.NewCardListActivity") {
    sleep(500);
  }
  toast("离开关注页");
  engines.stopAllAndToast();
});
while (true) {
  text("确定").click();
  sleep(200);
}