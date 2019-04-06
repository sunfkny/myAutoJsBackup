//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}

var i = 6;
var raw="";
var mystr=new Array();
mystr[0]="200a";
mystr[1]="2060";
mystr[2]="2061";
mystr[3]="2062";
mystr[4]="2063";
mystr[5]="2064";
mystr[6]="2065";
mystr[7]="2066⁣⁤⁥⁦⁣⁤⁥⁦⁣⁤⁥⁦⁣⁤⁥⁦";
mystr[8]="2067";
mystr[9]="2068";
mystr[10]="2069";

while (i--) {
    raw += "\\u" + mystr[Math.round(Math.random()*10)];
}
//rawInput("复制", raw);
var unicode = decodeUnicode(raw);
rawInput("复制", unicode);