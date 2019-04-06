auto("fast");


toast("请打开一个聊天窗口");
sleep(500);

for(i=0;i<100;i++){
    if(currentPackage() == "com.stardust.scriptdroid"){
        sleep(300);
        continue;
    }
    setText("嘤");
    click("发送");
}