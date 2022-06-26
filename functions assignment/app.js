// var ElDate = document.querySelector("#cDate");
// var showDate = document.querySelector("#message");

// function DateBrowser(){
//     showDate.innerHTML
// }
// var showMessage = document.querySelector("#showLearn");

// showMessage.innerHTML = "You are learning JAVascript";




// var today = new Date();
//   var day = today.getDay();
//   var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
//   var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//   var dateTime = date+' '+time;
   
//   document.getElementById("displayDateTime").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];





// 3.	Write a function that takes first & last name
//  and then it greets the user using his full name.

// var firstName = document.querySelector("#firstName");
// var LastName = document.querySelector("#lastName");

// var showGreetings = document.querySelector("#showGreetings");

// function greetings() {
//   showGreetings.innerHTML = "With Greeting " + firstName.value + "" + LastName.value;
//   clearfunc();
// }
// function clearfunc(){
// firstName.value = "";
// LastName.value = "";
// }
// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// var num1 = prompt("Insert Num1");
// var num2 = prompt("Insert Num2");

// var inpuNumOne = document.querySelector("#num1");
// var inpuNumTwo = document.querySelector("#num2");
// var showResult = document.querySelector("#message");
//  function calcTotalPercent() {
//     //  var htmlMarks = +prompt("what is your HTML marks?");
//     //    var cssMarks = +prompt("what is your CSS marks?");
  
//        var obtainedMarks = inpuNumOne + inpuNumTwo;
//       //  var percentage = obtainedMarks / 200 * 100;
  
//        console.log(obtainedMarks);
//    }



// var h1 = document.querySelector("h1");
// console.log(h1);

// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calcu(){
//     var num1 = +prompt("Inser Num 1");
//     var operater = prompt("Insert operater");
//     var num2 = +prompt("Inser Num 2");

//     calculate = num1 + operater + num2;
//     console.log(calculate);



// }
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.


// function calcu(){
//      var num1 = +prompt("Inser Num 1");
//      var operater = prompt("Insert operater");
//      var num2 = +prompt("Inser Num 2");

//      if(operater === '+'){
//          resultofsum = num1 + num2;
//          console.log(resultofsum);
//         }
//         else if (operater === '-'){
//             resultofsum = num1 - num2;
//             console.log(resultofsum);  
//         }
//         else if (operater === '*') {
//             resultofsum = num1 * num2;
//             console.log(resultofsum);

//         }
//         else if (operater === '/') {
//             resultofsum = num1 / num2;
//             console.log(resultofsum);

//         }
//         else {
//             console.log("Error");
//             console.log(resultofsum);
//         }
       



//  }




// Write a function that squares its argument.

// var showSquare = document.querySelector("#message");
// function squareofNum(){
// var insNum = prompt("Insert a number to square it");

// showSquare.innerHTML = (insNum ** 2);
// console.log(insNum ** 2);
// }
// 10.	Write a function that writes variable length arguments list in your browser.

//  var variableOfCon = document.querySelector("#variable");
//  var showLenght = document.querySelector("#showLenght");

//  function knowLenght(){

//     var myVariable = variableOfCon.value;
//     lenghtVariable = myVariable. lenght;
//     //  console.log(myVariable. lenght);
//       console.log(lenghtVariable.value);
    
//     // showLenght.innerHTML = variableOfCon.value;
//     // variableOfCon.value = showLenght.innerHTML.length;
//     // console.log(variableOfCon.value);
//  }
// var myString = "string test";
// var stringLength = myString. length;
// console. log(stringLength); // Will return 11 because myString.

// var num1 = Math.max [34,4,54,34,123,67] ;
// console.log(num1);



// Write a program that prints number from start of the array
// to desired stop value. Given array:
// var scores =[12, 45 , 3, 22, 34, 50];
// (Hint: take stop value from user)
// E.g. if user gives 3 as input value print 12, 45, 3
// if user gives 34 as input value print 12, 45, 3, 22, 34


// var scores = [12, 45, 3, 22, 34, 50];
// var userInput = +prompt("where to stop");
//  for (i = 0; i <= scores.length; i++){ //12 45 3 22
//     console.log(scores[i]);
//     if(userInput === scores[i]){
//         break;
       
//     }
    
//  }

// var scores = [12, 45, 3, 22, 34, 50];
// var userInput = +prompt("where to stop?");
// var index = scores.indexOf(userInput);
// for (var i = 0; i <= index; i++) {
//     console.log(scores[i]);
// }




// You have an array
// A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
// Write each element on new line with the help of nested for
// loops.

// var numArray = [ 
//     [1,2,3] , [4,5,6] , [7,8,9]
//  ];

//  for(i = 0; i < numArray.length; i++){
// console.log(numArray[i]);
// }
// for(j = 0; j<i; j++){
//     console.log(numArray[j]);
// }

//  }


// not happeing ask how 
// var userInput = +prompt("input any number to decrease its value by 0.5");
// for(i = 0; i <=userInput; i - 0.5){
//     console.log(userInput[i]);

// } 
// Write a for loop that will iterate from 0 to 20. For each
// iteration, it will check if the current number is even or odd, and
// report that to the screen (e.g. "2 is even").

// var inputUser = +prompt("input any number to know the even number ");
// for(var i = 0; i<= inputUser; i++){
//      if(inputUser % 2==0){
//         console.log(inputUser[i]);
//      }
     
// }


// for(i =0; i<=50; i++){
//    console.log(i);

// }

// var cityName = ["Karachi","lahore","Punjab","KPK","Islamabad"];
// for(i = 0; i<=cityName.length; i++){

//    console.log(cityName[i]);
// }



// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];


//  var fullNames = [];

//  for(var i = 0; i <= firstNames.length; i++){
//    for(var j = 0; j <= lastNames.length; j++ ){
//      fullNames.push(firstNames[i] + lastNames[j]);
      
//    }
//  }
// var cars = ["BMW","Ferrari","Beneli","Harely","Honda"];
// var messagetoShow = "";
// for(i = 0; i < cars.length; i++){
//    messagetoShow += cars[i] + "<br>"; 

// } 
// document.getElementById("message").innerHTML=messagetoShow;

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "<br>";
// }

// document.getElementById("message").innerHTML = text;


// var emptyMessage = "";
// for( var i = 0; i < 5; i++){
// emptyMessage += "this is number" + i + "<br>";

// }
// document.getElementById("demo").innerHTML = emptyMessage;


// var fruits = ["Mango","Banana","Apple","Peach"];
// var emptyMessage = "";
// for(var i = 0; i < fruits.length; i++){
//    emptyMessage += fruits[i] + "<br>";
   
// }
// console.log(emptyMessage);
// document.getElementById("demo").innerHTML = emptyMessage;








// var tableName = +prompt("Enter Any table you want to print");
// var limitOfTable = +prompt("Enter The Lenght of table");
// var tableInnerName = "";
// for(i = 1; i <= limitOfTable; i++){
//   tableInnerName += tableName + " X " + i + " = " + tableName * i + "<br>";
  
   
// }
// console.log(tableInnerName);
// document.getElementById("demo").innerHTML = tableInnerName;


// var fruits = ["Banana","Mango","Peach","Apple","Strawberry"];
// var emptyMessage = "";
// for(i = 0; i < fruits.length; i++){
//    emptyMessage += "Element at index is" + " " + i + " is " + fruits[i] + "<br>";
//    console.log(fruits[i]);
// }
// document.getElementById("demo").innerHTML = emptyMessage;








// Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.




// var index0 = prompt("Write items you want at index 0");
// var index1 = prompt("Write items you want at index 1");
// var index2 = prompt("Write items you want at index 2");
// var index3 = prompt("Write items you want at index 3");
// var indexArray = [index0,index1,index2,index3];
// var emptyMessage = "";
// var numItemss = "";
// var itemss = "";
// for( var i = 0; i < indexArray.length; i++){
//    numItemss += "Number of items" + indexArray.length  + "<br>";
//    itemss += "Items" + "<br>"
//    emptyMessage += indexArray[i] + "<br>";
//    console.log(indexArray[i]);
// }
// document.getElementById("numItems").innerHTML = numItemss;
// document.getElementById("items").innerHTML = itemss;
// document.getElementById("demo").innerHTML = emptyMessage;



// document.getElementById("counting").innerHTML = "Counting Items" ;

// var showcountingItems = "";
// for (i = 1; i <= 20; i++){
//    showcountingItems += i + ",";
//    console.log(i);
   
// }
// document.getElementById("showCounting").innerHTML = showcountingItems;




// document.getElementById("even").innerHTML = "Even Numbers" ;

// var showEvenNum = "";
// for (i = 1; i <= 20; i++){
//    if(i %2 == 0 ){
//    showEvenNum += i + ",";
//    console.log(i);
//    }
   
// }
// document.getElementById("showEven").innerHTML = showEvenNum;

// document.getElementById("odd").innerHTML = " Odd Numbers" ;

// var showOddNum = "";
// for (i = 1; i <= 20; i++){
//    if(i %2 == 1 ){
//    showOddNum += i + ",";
//    console.log(i);
//    }
   
// }
// document.getElementById("showOdd").innerHTML = showOddNum;



// document.getElementById("series").innerHTML = " Series " ;

// var showSeries = "";
// for (i = 1; i <= 20; i++){
//    if(i %2 == 0 ){
//    showSeries += i + "k,";
//    console.log(i);
//    }
   
// }
// document.getElementById("showSeiresp").innerHTML = showSeries;









let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i <= n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);



// let n = 5;
// let string = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);