var nam=prompt("enter name:");
var a =[]
function vow(){
  for (i=0; i<(nam.length); i++){
    if (nam.charAt[i]===('a'||'A'||'e'||'E'||'i'||'I'||'o'||'O'||'u'||'U')){
      a.push(nam.charAt[i]);
      console.log(a);
      console.log(nam.charAt[i])
    }
  }
  console.log(a.length);
}

vow();