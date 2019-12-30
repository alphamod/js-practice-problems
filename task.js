/*class guvi_student {
  constructor(){
  this.mark1 = 50;
  this.mark2 = 100;
  }
  prin(x){
    console.log(x);
  }
}
student1=new guvi_student();
student2=new guvi_student();
console.log(student1.prin(this.mark1));
*/

function run(){
let a=document.getElementById("ex").value.split(",").map(Number);
var g=a[0];
for (i=0; i<a.length; i++){
if (a[i]<g){
g=a[i];
}
}
alert(g);
}


function clicked(){
alert("Hello User!!!");
}

function cyan(){
let a= document.getElementById("para");
a.style.color="red";
}
function magenta(){
let a= document.getElementById("para");
a.style.color="aqua";
}

function red(){
let a= document.getElementById("stradd");
a.style.color="red";
}
function aqua(){
let a= document.getElementById("stradd");
a.style.color="aqua";
}

function blue(){
let a= document.getElementById("grt");
a.style.color="red";
}
function green(){
let a= document.getElementById("grt");
a.style.color="aqua";
}

function brown(){
let a= document.getElementById("arr");
a.style.color="red";
}
function yellow(){
let a= document.getElementById("arr");
a.style.color="aqua";
}

function add(){
let a =document.getElementById('box1').value;
let b = document.getElementById('box2').value;
alert(a.concat(' '+b));
}

function greatestnum(){
let a=Number(document.getElementById('num1').value);
let b=Number(document.getElementById('num2').value);
let c=Number(document.getElementById('num3').value);
if ((a>b)&&(a>c)){
alert(a+" is the greatest number")
}else if ((b>a)&&(b>c)){
alert(b+" is the greatest number")
}else{
alert(c+" is the greatest number")}
}

function sumarr(){
let a=document.getElementById("array1").value;
b=a.split(",").map(Number);
alert(b);
console.log(b);
var sum1=0
let num=b.length
for (i=0; i<num;i++){
sum1=b[i]+sum1;
}
alert("the sum of entered array is "+sum1);
}


