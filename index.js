var num1=8
var num2=2
   
var sumEi=document.getElementById("screen") 
function add(){
    console.log("add")
    var addTotal=num1+num2;
    console.log(addTotal)
    sumEi.value = addTotal;
}
