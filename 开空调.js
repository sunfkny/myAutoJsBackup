auto;

log("开始开空调");
shell("input keyevent 26",true);
sleep(1000);
device.wakeUp();
sleep(1000);
swipe(300, 1000, 800, 1000, 200);
sleep(500);

click(540,630);
//万能遥控器
sleep(1000);


click(234,1015);
//click("1");
sleep(100);
click(540,1560);
//click("0");
sleep(100);
click(540,1000);
//click("2");
sleep(100);
click(234,1182);
//click("4");
sleep(1500);


click("新科空调");

sleep(500);

id("ac_command_power").findOne().click();

status=id("ac_command_power").findOne().text();

if(status=="开"){
    sleep(500);
    id("ac_command_power").findOne().click();
    sleep(500);
}


temp=26;
//目标温度
click(180,1585);
sleep(500);

df=id("ac_state_degree").findOne().text()-temp;
//toast("差别"+df+"度");

if(df>0){
    while(df--){
    click(180,1585);
    sleep(500);
    }
}else{
    df=0-df;
    while(df--){
    click(900,1585);
    sleep(500);
    }
}

sleep(500);
log("成功执行");
shell("input keyevent 26",true);

