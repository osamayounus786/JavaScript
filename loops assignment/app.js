// 1. Write a program to display the message “Hello World” 5 times
// in your browser using for loop.
// for(i = 0; i <= 5; i++){
// console.log("Hello World!" , + i)
// }



// Write a program to print numeric counting from 1 to 10.
// for(i = 1; i <=10; i++){
//     console.log(i);
// }

// . Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user

// tableName = +prompt("Enter Table Name");
// tableLenght = +prompt("Enter the lenght of table");

// for(tableTime = 1; tableTime <  tableLenght + 1; tableTime++){
//     console.log(tableName + " X " + tableTime + " = " + tableName * tableTime);
// }

// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// // console.log(A);

// for(i = 0; i < A.length; i++){

//     console.log(i + [A]);
// }
// 4. You have an array
// A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”]
// Write each element on new line with the help of for loop.







// ask for this to someone 
mobNames = document.querySelector("#mobiles");

var mobArray = ["Nokia","Samsung","Apple","Sony","Huawei"];

for(i = 0; i < mobArray.length; i++){
    mobNames.innerHTML = mobArray[i];
    console.log(mobNames.innerHTML + "<br / >");
}


// Write a program to print items of the following array using for
// loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var liOffruits = document.querySelector("#listoffruits");
// var indOfruits = document.querySelector("#indexofFruits");

// fruitsArr = ["Mango","Banana","Peach","Apple","PineApple"];
// // liOffruits.innerHTML = fruitsArr;
// // console.log(liOffruits);
// // console.log("Element at index"+fruitsArr[0]+ " is apple ");

// for(var i = 0; i < fruitsArr.lenght; i++)
// {
//     liOffruits.innerHTML = fruitsArr[i];
//     console.log(liOffruits.innerHTML);
// }