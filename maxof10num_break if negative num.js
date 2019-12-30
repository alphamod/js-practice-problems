function fact(){

  var a=0;
  for (i=0;i<10;i++){
    var num=Number(prompt('enter the number'));
    if (num<0){
      break;
    }
    a=num+a;
  }
  console.log(a);
}
fact();