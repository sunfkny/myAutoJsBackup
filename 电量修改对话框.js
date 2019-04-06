var i = dialogs.select("伪装电量", "修改", "还原");
if (i == 0) {
  var level = rawInput("输入伪装电量");
  shell("dumpsys battery set level " + level, true);
}
if (i == 1) {
  shell("dumpsys battery reset", true);
}