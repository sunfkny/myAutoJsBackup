//shell("am start -n com.android.phone/com.android.phone.NetworkSelectSettingActivity", true);
//shell("am start -n com.tencent.mm/com.tencent.mm.plugin.setting.ui.setting.SettingsRingtoneUI", true);


//var value=;

//var url="https://mac.51240.com/"+encodeURI(value.replace(/:/g,"-")+''+"__mac/"));

//var i = app.intent({ action: "VIEW", type: "text/plain", data: url }); app.startActivity(i); } 

//toastLog(decodeURI("%e7%ac%ac%e4%b8%80%e6%ac%a1%e5%92%8c%e5%a6%b9%e5%a6%b9%e7%9d%a1%e8%a7%89%e7%9a%84%e6%97%b6%e5%80%99%e6%b2%a1%e6%95%a2%ef%bc%8c%e7%ac%ac%e4%ba%8c%e6%ac%a1%e6%95%a2%e4%ba%86"))
//f = new java.io.File("test.txt")
//for (i in f) { print(i) }

Intent intent = new Intent(Intent.ACTION_VIEW);
String type = "video/mp4";
Uri name =Uri.parse("file:///sdcard/DCIM/Camera/VID_20190406_123334.mp4");
intent.setDataAndType(name, type);
intent.setClassName("yyc.xk.core", "yyc.xk.core.bzsz");
startActivity(intent);