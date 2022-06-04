// Declare an empty array using JS literal notation to store
// student names in future.

// var studentsName = [];

// studentsName.push("Osama","Sameer","Sadiq");
// console.log(studentsName);

// Declare and initialize a strings array.

// var fruits = ["Apple","Mango"];
// console.log(fruits);

// Decalare and number a number array

// var numbers = [1,2,3,4,65,76];
// console.log(numbers);

// Declare and initialize a boolean array.
// var booleanArr = [true,false];
// console.log(booleanArr)


// Declare and initialize a mixed array.

// var mixArr = ["string",58,true];
// console.log(mixArr);

// Declare and Initialize an array and store available mobile
// networks in Pakistan.


// var networksArr = ["ZOng","Telenor","WArid","Apachi"];
// networksArr.pop();
// console.log(networksArr);

// . Declare and Initialize an array and store available education
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS,
// M. Phil., PhD). Show the listed qualifications in your browser
// like:

// var noEdu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS",
//      "M. Phil", "PhD"];
//      var edu = document.querySelector("#qualifi");
//      edu.innerHTML = noEdu;


// Declare and initialize an empty array to store top movies of
// 2015. Add movies one by one in an array. Display the elements
// & length of array in your browser. (Use array’s length method)

// elMessage = document.querySelector("#message");
// elMessagef = document.querySelector("#message1");
// elMessages = document.querySelector("#message2");
// elMessaget = document.querySelector("#message3");
// elLenght = document.querySelector("#lenght");

// var moviesArr = [];
// moviesArr [0] = "Avengers: Age Of Altron";
// moviesArr [1] = "The Spectre";
// moviesArr [2] = "Thor";
// moviesArr [3] = "The Hulk";
// elMessage.innerHTML = moviesArr[0];
// elMessagef.innerHTML = moviesArr[1];
// elMessages.innerHTML = moviesArr[2];
// elMessaget.innerHTML = moviesArr[3];
// var length = moviesArr.length;
// elLenght.innerHTML = moviesArr.length;
// console.log(moviesArr);
// console.log(length);





// 0. Declare and Initialize an array with your favorite cars. Show
// a. First index of the array
// b. Car at first index of the array
// c. Last index of the array


// var cars = ['Bugati','BMW'];
// // console.log(cars);
// // console.log(cars[0]);
// console.log(cars[1]);

// Write a program to store 3 student names in an array. Take
// another array to store score of these three students. Assume
// that total marks are 500 for each student, display the scores &
// percentages of students like:


// var studentNames = ['Sameer','Moiz','Hassan'];
// var scoreStudents = ['320','230','480'];

// // studentNames [0] = "Score Of Sameer is", + scoreStudents[0];
// console.log("Score Of ", studentNames [0], "is", + scoreStudents[0]);
// console.log("Score Of ", studentNames [1], "is", + scoreStudents[1]);
// console.log("Score Of ", studentNames [2], "is", + scoreStudents[2]);


// Question to be asked >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end &
// add that color to the end of the array. Display the updated
// array in your browser.
// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.
// . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var colorArr = ["Red", "Blue", "Green",];
// colorMessage = document.querySelector("#colorMessage");
// colorMessageSec = document.querySelector("#colorMessage2");
// colorMessageThir = document.querySelector("#colorMessage3");


// colorMessage.innerHTML = "These are colors available " + colorArr;
// console.log(colorMessage.innerHTML);


// var colorQ = prompt("What color do you want in the beginning");
// colorArr.shift();
// colorArr.unshift(colorQ);


// console.log(colorArr);

// colorMessageSec.innerHTML = "These are colors changes in the begining available " + colorArr;
// console.log(colorMessageSec.innerHTML);

// var colorQsec = prompt("What color do you want in the end");
// colorArr.pop();

// colorArr.push(colorQsec);
// console.log(colorArr);

// colorMessageThir.innerHTML = "These are colors changes in the end available " + colorArr;
// console.log(colorMessageThir.innerHTML);


// c. Add two more color to the beginning of the array. Display
// the updated array in your browser.


// colorMessageFourth = document.querySelector("#colorMessage4");

// var colorQthir = prompt("Do want to add two more Colors Yes then Write ?");
// colorArr.unshift(colorQthir);

// console.log(colorArr);
// colorMessageFourth.innerHTML = "These are the two more colors added " + colorArr;
// console.log(colorMessageFourth);

// f. Ask the user at which index he/she wants to add a color &
// color name. Then add the color to desired position/index.

// var colorMessageFifth =  document.querySelector("#messageFif");

// var colorQfif = prompt("At which index do you want add colors");


// colorArr.splice() = colorQfif;
// console.log(colorArr);
// colorMessageFifth.innerHTML = "these are the colors which changes by index and added" + colorArr;
// console.log(colorMessageFifth);


// Write a program to store student scores in an array & sort
// the array in ascending order using Array’s sort method.

// var scoreFstudents = ["b","z","d","g","j","e","f"];
// scoreFstudents.sort();
// scoreFstudents.reverse();
// console.log(scoreFstudents);


var numberss = [34,12,43,556,864,23,435,23,1,0,76,67];
numberss.sort(function (a,b) {return a - b} );

console.log(numberss);

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

console.log(points);