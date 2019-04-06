shell("am start -ncom.netease.cloudmusic/com.netease.cloudmusic.activity.MainActivity", true);
shell("sleep 3", true);
shell("input tap 70 140", true);
shell("sleep 1", true);
shell("input tap 780 444", true);
shell("sleep 1", true);
shell("am force-stop com.netease.cloudmusic", true);