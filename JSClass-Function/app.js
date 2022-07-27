// function newFunc(){
// console.log("hello this is function");
// }
// newFunc();




// function fruits(apple,mango){
// console.log(apple,mango);
// }
// fruits(5,4);




// local func & global func


// var userName = "Osama";
// function nameOfp(){
//     var userName = "Younus";
//     console.log(userName);
// }
// console.log(userName);
// nameOfp();

















// function numbers(num1,num2,num3,num4){

//         console.log(num1 + num2 + num3 + num4);
// }

// numbers(4,5,1,10);
// numbers(5,4,3,2);


// function multi(num1,num2){
//     return num1 * num2;
// }
// function div(num1,num2){
//     return num1 / num2;
// }

// function calcu(numb1,numb2,passFunc){
// var dd = passFunc(numb1,numb2);
// console.log(dd);
// }
// calcu(5,6,multi);
// calcu(5,6,div);





var a = 10;
var b = 15;
var Calcu = prompt("Write mathematics operater to do operation of a & b");
switch (Calcu){
    case "+":
    alert(a + b);
    break;
    case "-":
        alert(a - b);
        break;
        case "*":
    alert(a * b);
    break;
    case "Wed":
        alert("Its is wednesday");
        break;
    case "Thu":
        alert("Its is Thursday");
        break;
    case "Fri":
        alert("Its is Friday");
        break;
    case "Sat":
        alert("Its is Saturday");
        break;
}