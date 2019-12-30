(printAllValues = () =>{
    var obj = {name : "RajiniKanth", age : 33, hasPets : false};
    var a=[];
    for (i in obj){
        a.push(obj[i]);
    }
    console.log("\n",a);
})();



(printAllKeys = () =>{
    var obj = {name : "RajiniKanth", age : 33, hasPets : false};
    var a=[];
    for (i in obj){
        a.push(i);
    }
    console.log("\n",a);
})();

(ObjectToList = () => {
    var obj = {name : "ISRO", age : 33, role : "scientist"};
    var list1=[];
    for (i in obj){
        list1.push([i,obj[i]]);
    }
    console.log("\n",list1);
})();

(transFirstAndLast = () => {
    var arr = ["guvi", "I", "am", "Ironman", "Syed"]
    var d = {};
    d[arr[0]]=arr[arr.length-1];
    console.log("\n", d);
})();

(listToObject =() =>{
    var arr = [ [ 'name', 'ISRO' ], [ 'age', 33 ], [ 'role', 'scientist' ] ]
    var d={};
    for (i in arr){
        d[arr[i][0]]=arr[i][1];
    }
    console.log("\n", d);
})();

(transEmpData= () => {
    var arr= [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
    var r=[];
    for (i in arr){
        var d={};
        for (j in arr[i]){
            d[arr[i][j][0]]=arr[i][j][1];
            }
        r.push(d);
    }
    console.log("\n\n",r);
})();

(assertObjectsEqual = () =>{
    var expected = {foo: 6, bar: 6};
    var actual = {foo: 6, bar: 6};
    var actualStri ng=JSON.stringify(actual);
    var expectedString=JSON.stringify(expected);
    if (actualString==expectedString){
        console.log("\nPassed");
    }else {
        console.log ("\nFAILED. " + "Expected '"+ expectedString+"' but got '"+ actualString+"'")
    }

})();