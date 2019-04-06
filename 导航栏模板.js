"ui";
ui.statusBarColor("#2196F3");
ui.layout(
<frame background="#2196F3" h="55" w="360">
<horizontal h="55" w="*">
<button id="exit" text="返回" w="80" h="*" layout_gravity="center" style="Widget.AppCompat.Button.Borderless" textColor="white" textSize="15sp"/>
<text text="" w="200" layout_gravity="center" textColor="white" textSize="20sp"/>
<button id="menu" text="菜单" w="80" layout_gravity="center" style="Widget.AppCompat.Button.Borderless" textColor="white" textSize="15sp"/>
</horizontal>
</frame>
);

ui.exit.click(function(){
    ui.finish();
});
ui.exit.click(function(){
    
});
