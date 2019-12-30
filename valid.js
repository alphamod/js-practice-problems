function valid(){
var a = document.getElementById("usr").value;
var b = document.getElementById("pwd").value;
if (a=="user@gmail.com" && b=="password1"){
location.href="welcome.html";
}else{
location.href="fail.html"
}
}

