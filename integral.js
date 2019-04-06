input=getClip()
integral="int("+input+")dx"

var input
input=getClip()
var i = app.intent({
    action: "VIEW",
    data: "wolframalpha:///?i="+integral
});
app.startActivity(i);