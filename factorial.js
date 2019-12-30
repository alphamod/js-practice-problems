    function fact(){
  var num=Number(prompt('enter the number'));
  var a=1;
  for (i=1;i<=num;i++){
    a=i*a;
    console.log(a);
  }
  console.log(a);
}
fact();