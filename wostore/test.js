"ui";
ui.statusBarColor("#2196F3");
ui.layout(
    <scroll>
        <vertical>
            <horizontal h="55" w="*" background="#2196F3">
                <text text="快否激活" w="320" layout_gravity="center" paddingLeft="20" textColor="white" textSize="20sp"/>
                <button id="exit" text="退出" w="60" layout_gravity="center" style="Widget.AppCompat.Button.Borderless" textColor="white" textSize="15sp"/>
            </horizontal>
            <button id="download" w="auto" text="下载二进制文件" layout_gravity="center"/>
            
        </vertical>
    </scroll>
);


ui.exit.click(function() {
    if (shell("ls /", true).code) {
    dialogs.alert("没有授予root权限，请授权后重试");}
});
