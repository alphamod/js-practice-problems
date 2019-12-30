var arr=[];
var a=0;
var num=Number(prompt("Enter the total amount of numbers"))
var avg = function aver(){
  for (i=0; i<num; i++){
    var n=Number(prompt("Enter the number"));
    arr.push(n);
    a=arr[i]+a;
  }
  var resl=(a/num);
    console.log(resl);
}
avg()