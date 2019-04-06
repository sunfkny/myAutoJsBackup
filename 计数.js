"ui";

ui.layout(
    <vertical padding="16">
        <input id="sum"/>
        
        <button id="click1" text="+10" w="auto"/>
 
         <input id="n"/> 
         
         <button id="click2" text="+1" w="auto"/>      
         
         <button id="click3" text="copy" w="auto"/>      

    </vertical>
);


ui.click1.click(()=>{
    var a=Number(ui.sum.text())+10
    ui.sum.setText(""+a)
});

ui.click2.click(()=>{
    var b=Number(ui.n.text())+1
    ui.n.setText(""+b)
});

ui.click3.click(()=>{
    setClip("出："+ui.n.text()+" 总："+ui.sum.text()+" 率："+ui.n.text()/ui.sum.text())
});


