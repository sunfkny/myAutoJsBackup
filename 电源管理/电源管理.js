var choice = -1;
var list = [
  "关机",
  "重启",
  "软重启",
  "恢复模式",
  "引导程序",
  "重启系统界面"
];
choice = dialogs.singleChoice("电源管理", list);

if (choice == 0) {
  shell("reboot -p", true);
}
if (choice == 1) {
  shell("reboot", true);
}
if (choice == 2) {
  shell("killall zygote", true);
}
if (choice == 3) {
  shell("reboot recovery", true);
}
if (choice == 4) {
  shell("reboot bootloader", true);
}
if (choice == 5) {
  shell("pkill -f com.android.systemui", true);
}