var input
input=getClip()
var i = app.intent({
    action: "VIEW",
    data: "wolframalpha:///?i="+input
});
app.startActivity(i);