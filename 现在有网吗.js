var flag = 0;
while (flag == 0) {
    var sh = new Shell();
    sh.exec("ping -c 1 baidu.com");
    sh.setCallback({
        onNewLine: function(line) {
            //有新的一行输出时打印到控制台 
            if (line!=""){
            log(line);}
            if (line.indexOf("64 bytes from 2") == 0) {
                flag = 1;
            }
            if (line.indexOf("64 bytes from 1") == 0) {
                flag = 1;
            }
        }
    });
        sleep(10000);
    sh.exit();
    if (flag == 1) {
        toastLog("网络正常，开始播放音乐");
        media.playMusic("/sdcard/脚本/1.mp3");
        //让音乐播放完
        sleep(media.getMusicDuration());
    }else{
        log("没有网络");
        }
}