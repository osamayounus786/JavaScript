// alert("This is Java Script \n Line Break");
// alert("Welcome to another alert");



// functions 

// 1.	Create a block of code that you can use several times. 
// function bringtea(){

//     console.log("this is code of creating a fucntion with block of code");

// }
// bringtea();


// 2.	Write a function that displays current date & time in your browser.


// function curDatenTime(){
//     // program to display the date
// // get local machine date time
// const date = new Date();

// // get the date as a string
// const n = date.toDateString();

// // get the time as a string
// const time = date.toLocaleTimeString();

// // display date
// console.log('Date: ' + n);

// // display time
// console.log('Time: ' + time);
// }
// curDatenTime();

// function ToShowDate(){
//     var date = new Date();

//     var rDate = date.toDateString();
//     var rTime = date.toLocaleTimeString();
//     console.log("Date: " + rDate);
//     console.log("Time: " + rTime);
// }
// ToShowDate();


// function greetUser(){
//     var fName = prompt("your first name");
//     var lName = prompt("your last name");
//     console.log("First Name: " + fName + " Last Name: " + lName);
// }
// greetUser();







// 4.	Write a function that adds two numbers
//  (input by user) and returns the sum of two numbers.

// function sumOfnum(){
//     fNum = +prompt("Enter first num to add in second");
//     sNum = +prompt("Enter second num to add in first");
//     var sum = fNum + sNum;
//     console.log("Result: " + sum);
// }
// sumOfnum();





// Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
//  Return and show the desired result in your browser.




// function calcu(){
//     var num1 = +prompt("Please Insert Num 1");
//     var num2 = +prompt("Please Insert Num 2");
//     var operater = prompt("Please insert operater");
//     if(operater === '+'){
//     var calcuNum = num1 + num2;
    
//     }
    
//     if(operater === '-'){
//     var calcuNum = num1 - num2;
    
//     }
    
//     if(operater === '*'){
//     var calcuNum = num1 * num2;
    
//     }
//     if(operater === '/'){
//     var calcuNum = num1 / num2;
    
//     }
    
    
    
//     console.log(calcuNum)

    
// }
// calcu();


// function sqArgu(){
//     var sqr = +prompt("write a number to square it");
//     // var sqr = 5;
//     var sqrOf =  sqr ** 2;
//     // var sqrNum = sqr + '**' ;
//     console.log(sqrOf);
// }
// sqArgu();



// function sqArgu(){
//          var sqr = prompt("write a word to find its lenght");
//          // var sqr = 5;
//         //  var sqrOf =  sqr ** 2;
//          // var sqrNum = sqr + '**' ;
//          console.log(sqr);
//         //  console.log(length(sqr));
//      }
//      sqArgu();
    

// var x = +prompt("write a number to check if it is divisble by 3 or not");
// if (x %3=== 0){
//     console.log("Number is divisible by 3");
// }
// else{
//     console.log("Not divisible by 3");
// }


// var leapYear = +prompt("write a number to check if it is divisble by 3 or not");
//     if (leapYear % 4){
//     console.log("Not a leap year");
// }
//     else if(leapYear % 100){
//     console.log("Its a leap year");
// }
// else if( leapYear % 400){
//     console.log("Not a leap year");
// }

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.





// var correctPass = "osamayounus";
// var inPass = prompt("Enter User Password");

// if (inPass === ""){
//     console.log("Please Enter The Password");
// }
// else if(inPass === correctPass){
//     console.log("“Correct! The password you entered matches the original password”");

// }
// else {
//     console.log("wrong password try again");
// }



// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var int1 = +prompt("Enter Num 1 to know which is greater");
// var int2 = +prompt("Enter Num 2 to know which is greater");

// if( int1 === int2){
//     console.log("these are equal numbers");
// }
// else if( int1 > int2){
//     console.log(int1 + " is greater than  " + int2)
// }
// else if(int1 < int2){
//     console.log(int1 + " is less than" + int2);

// }



// Write a program that takes input a number from user & state
// whether the number is positive, negative or zero.


// var inpNum = +prompt("Input a number to know its is negative or postive");
// if (inpNum < 0){
//     console.log("this is negative number");
// }
// else if (inpNum === 0){
//     console.log("zero");
// }
// else if (inpNum > 0){
//     console.log("this is postive number");
// }








// Write a program that takes a character (i.e. string of length 1)
// and returns true if it is a vowel, false otherwise.
// var vowels = ("a","e","i","o","u");
// var vowels = ['a','e','i','o','u'];
// var inpUser = prompt("Write any character to know its vowel or not");
// if(inpUser === vowels[0]){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// var vowels = ['a','e','i','o','u'];
// var inpUser = prompt("Write any character to know its vowel or not");
// for(var i = 0; i<vowels.length; i++){
//     if(inpUser === vowels[i]){
//         console.log("its vowel");
//     }
//     else{
//         console.log("its not vowel")
//     }
// }




// var fruits = ['apple', 'banana', 'watermelon'];

// fruits.pop();
// fruits.push("oranges", "mango", "grapes");
// console.log(fruits);



// var fruits = ['apple', 'banana', 'watermelon'];

// fruits.shift();

// console.log(fruits);
// fruits.unshift("hello");

// console.log(fruits);


//  var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];

// //  fruits.splice(0, 2, 'grapes', 'peach');
// fruits.splice(2, 0, "grapes", "peach");
// console.log(Array.isArray(fruits));
//  console.log(fruits)


// var fruits = ['apple', 'banana', 'orange', 'mango', 'watermelon'];
// var favFruits = fruits.slice(2, 4);

// console.log(favFruits, fruits);



//  var carsName = "khyber - mehran - cyber truck - fx - sharade";
//  var carsArr = carsName.split(" - ");
//  console.log(carsArr);


//  var userName = "Haider Ali Shah";
// console.log(userName.split(" "));


// var nic = "42111:541111:1";
// var nicSplitted = nic.split(":");
// var nicFormatted = nicSplitted.join("-");
// console.log(nicFormatted);
// var userName = ["haider", "ali", "shah"];
// var fullName = userName.join(" ");

// console.log(fullName);


// var secA = ["ali", "akram", "Riaz"];
// var secB = ["Taha", "imran", "zain"];

// var webClass = secA.concat(secB);

// console.log(webClass, secA, secB);


// var fruits = ['apple', 'banana', 'orange', 'mango', 'banana', 'watermelon'];

// var checkFruit = prompt("let us know fruit name?");

// console.log(fruits.indexOf(checkFruit));

// console.log(fruits.includes(checkFruit));




var fruits = ['mango', 'orange', 'banana'];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i] + " " + fruits[i + 1]);
}