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





// var a = 10;
// var b = 15;
// var Calcu = prompt("Write mathematics operater to do operation of a & b");
// switch (Calcu){
//     case "+":
//     alert(a + b);
//     break;
//     case "-":
//         alert(a - b);
//         break;
//         case "*":
//     alert(a * b);
//     break;
//     case "Wed":
//         alert("Its is wednesday");
//         break;
//     case "Thu":
//         alert("Its is Thursday");
//         break;
//     case "Fri":
//         alert("Its is Friday");
//         break;
//     case "Sat":
//         alert("Its is Saturday");
//         break;
// }




































// var namePerson = document.getElementById('suleman');


// function newFunc(){
//     console.log("this is suleman the shahka");
//     namePerson.innerHTML = "this is saqib the gattae builder"
// }
// newFunc();







// function greetUser(greeting){
//     greeting = 'hello there'
//     shabana = 'salam'
//     alert(greeting + shabana);
// }
// greetUser('hello there',18);


// var myname = 'osama';
// var fName = 'M.Younus';

// function greetUser(myname,fName){
//     alert(myname + fName);
// }
// // greetUser(myname,fName);
// greetUser('saqib ','abbas');

var merchTot = parseInt(prompt("write number"));

var orderTot;
 if (merchTot >= 100) {
 orderTot = merchTot;
 console.log(orderTot);
 }
 else if (merchTot < 50.01) {
 orderTot = merchTot + 5;
 console.log(orderTot);
 }
 else {
 orderTot = merchTot + 5 + (.03 * (merchTot - 50));
 console.log(orderTot);
 }
 
