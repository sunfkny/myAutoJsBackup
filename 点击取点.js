auto();
//启用触摸监听
sleep(500);
toast("开始捕捉点击");
events.observeTouch();
//注册触摸监听器
events.onTouch(function(p) {
  //toast(p.x + "," + p.y);
  events.removeAllTouchListeners();
  var options = ["仅复制坐标点", "复制autojs命令"];
  var i = dialogs.select("捕获坐标点为  " + p.x + "," + p.y, options);
  switch (i) {
    case 0:
      setClip(p.x + "," + p.y);
      break;
    case 1:
      setClip("click(" + p.x + "," + p.y + ");");
      break;
  }
  exit();
});