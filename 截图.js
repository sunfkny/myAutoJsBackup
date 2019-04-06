const format = require('time.js');
//requestScreenCapture();
//var img = captureScreen();
var nowTime = new Date().format("yyyy-MM-dd-hh-mm-ss");
var str="/sdcard/DCIM/Screenshots/Screenshot_"+nowTime+".jpg";
//images.saveImage(img,str);
toast(str);