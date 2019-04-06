shell("am start -ncom.miui.miuibbs/com.miui.miuibbs.myspace.CheckInActivity", true);
shell("sleep 1", true);
shell("input tap 540 370", true);
shell("am force-stop com.miui.miuibbs", true);