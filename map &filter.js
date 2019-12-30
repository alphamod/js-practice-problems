/*var myfn=(arr)=>{
    brr=[];
    for (i=0;i<arr.length;i++){
        brr[i]=2*arr[i]
    }
    return brr;
}

console.log(myfn([1,2,3,4]));*/

/*var mul= a => a*2;
// single line arrow function.
console.log(mul(2));*/

/*arr =[1,2,3,4,5,6,7,8,9]
arr1= arr.filter(a=>a%2==0); //filters and return even elements in the array.
console.log(arr1);*/

/*var namefil = arr=> {
    for (i=0; i<arr.length; i++)

}*/

/*arr=["syed", "guvi", "javascript","arrow function"];
resul=arr.map(a=> a.length);
result=arr.filter(a=> a.length>4);
console.log(resul);
console.log(result);*/


/*var func=() => {
    sMarks=[11,32,44,8,70,60,80,8,9,75]
    cgrade=30;
    b=[];
    d=[];
    for (i=0; i<sMarks.length;i++){
        if (sMarks[i]<cgrade){
            b.push(sMarks[i]+30);
        }else{
        b.push(sMarks[i]);
        }

        if (10<=b[i]&& b[i]<=29){
            d.push("D");
        }else if(30<=b[i] && b[i]<=59){
            d.push("C");
        }else if (60<=b[i] && b[i]<=79){
            d.push("B");
        }else if(80<=b[i] && b[i]<=100){
            d.push("A");
        }
    }
    console.log(b);
    console.log(d);
}

func();*/
/*
marks=[11,32,44,8,70,60,80,8,9,75]
cgrade=30;
var low = (a)=>{
    if (a<30){
        return a+30;
    }else{
        return a;
    }
};

var grade = (b)=>{
    if (b=>10 && b<=29){
        return "D";
    } else if (b=>30 && b<=59){
        return "C";
    }else if (b=>60&&b<=79){
        return "B";
    }else if (b=>80&&b<=100){
        return "A";
    }
}

correctedGrades=marks.map(low);
grades=marks.map(grade);
console.log(correctedGrades);
console.log(grades);
*/

mydata= {math:80, scien:60, history: 50}

for (i in mydata){
    console.log(i);
    console.log(mydata[i]);
}