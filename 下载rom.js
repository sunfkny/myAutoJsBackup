name=getClip()
n=name.split("_")
if(n[0]=="miui"/*&&n[1]=="MIMIX2S"*/){
//toastLog(n)
url="http://bigota.d.miui.com/"+n[2]+"/"+name
toastLog("下载地址："+url)
setClip(url)
//exit();
var i = app.intent({
    action: "VIEW",
    type: "text/plain",
    data: url
});
app.startActivity(i);
}
else{toastLog("没有检测到更新包或此包非MIX2s")}