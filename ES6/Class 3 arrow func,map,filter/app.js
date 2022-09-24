// function ing(ing1 = 'tea',ing2 = 'biscuits'){
//         console.log(ing1,ing2)
// }
// ing();

// arrow function

// let ing = (ing1 = 'tea',ing2 = 'biscuits')=>{
// console.log(`${ing1} k sath ${ing2}`);
// }

// ing();


// let ing = (ing1 = 'tea',ing2 = 'biscuits')=> console.log(`${ing1} k sath ${ing2}`);
    
    
//     ing();



// function names(firstName,lastName){
// console.log(firstName, lastName);
// }
// names("osama",'Younus');


// function fruits(fruit1 = 'mango',fruit2 = 'banana'){
//      console.log(fruit1 , fruit2);
// }

// fruits();



// let names = (firstName,lastName) =>{
// console.log(`${firstName} ${lastName}`);
// }
// names('osama','younus');
// let fruits = (fruit1,fruit2) => console.log(`${fruit1} ${fruit2}`);

// fruits('mango','banana');














// function cookFood(ing1 = "tea", ing2 = "biscuits", ...restIng) {
//     let basicMeal = `Bring ${ing1} and ${ing2}`;
//     let anyExtraMixture = restIng.length > 0 ? `Mixture of ${restIng}` : `Nothing extra`;
//     // console.log(basicMeal, anyExtraMixture);
//     return { basicMeal, anyExtraMixture };
// }

// let hospitality = cookFood("biryani", 'raita', 'salad', 'labe sherin');
// console.log(hospitality);



// let makeMeal = (ing1 = "tea", ing2 = "biscuits", ...restIng) => {
//     let basicMeal = `Bring ${ing1} and ${ing2}`;
//     let anyExtraMixture = restIng.length > 0 ? `Mixture of ${restIng}` : `Nothing extra`;
//     // console.log(basicMeal, anyExtraMixture);
//     return { basicMeal, anyExtraMixture };
// }

// let hospitality = makeMeal('sorop','papya','nimora','shinnu');
// console.log(hospitality);





























// let array = [1,2,3,4,5,6,7,8,9];
// console.log(array);

// let newArray = array.map(item => item % 2 === 0);
// console.log(newArray);



// just show num greater than 5 
// let numArr = [1,2,3,4,5,6,7,8,9];
// let newNum = numArr.filter (item => item >= 5);
// console.log(numArr,newNum);


// even numbers


// let evenNum = [1,2,3,4,5,6,7,8,9];
// let newEvenNum = evenNum.filter(item => item % 2 == 0);
// // console.log(newEvenNum);




// let reduceNum = [1,2,3,4,5,6,7,8,9];
// let newRenum = reduceNum.reduce((num1,num2,num3) =>{ 
//      return num1 + num2 - num3;
// });
// // console.log(newRenum);




// map
// let laptops = ['HP','MacBook','Dell','Lenovo','Asus'];
// let newLaptops = laptops.map(item => item.toLowerCase(laptops));
// console.log(newLaptops);


// filter
// let oddNums = [1,23,4,5,6,67,9,0,8];
// let oddResult = oddNums.filter(items => items %2 == 1);
// console.log(oddResult);


// // reduce
// let primeNum = [1,3,5,7,11,13,19];
// let newPrime = primeNum.reduce((num1,num2) => {
//      return num1 + num2;
// });
// console.log(newPrime);

// let firstName = ['Akram', 'Aslam', 'Amir', 'Abdullah', 'Muzammil'];
// let lastName = ["Khan", "Ahmed", "Khan", "Ansari", "Qureshi", "Khan"];

// let fullName = firstName.map(fName => `${fName} ${lastName[Math.floor((Math.random() * 6))]}`);
// console.log(fullName);






// let firstName = ['Sameer','Shabbir','Moiz','Hassan','Muzammil'];
// let lastName = ['Bux','Khan','Billo','Bux','Khan','Billo',];

// let fullName = firstName.map(fName => `${fName} ${lastName[Math.floor(Math.random()*6)]}`);

// console.log(fullName);



// let khans = fullName.filter(fullName => fullName.split(" ")[1]=== "Khan");

// console.log(khans);








// let numbers = [1, 2, 3, 4];
// // let sum = numbers.reduce((result, num) => result + num, 4);
// // console.log(sum);
// let sum = numbers.reduce((result, num) => {
//     // console.log(result, num);
//     return result + num
// }, 5);

// console.log(sum);


// let num = [5, 2, 4, 6, 10, 1];
// let prod = num.reduce((result, num) => result * num, 2);
// console.log(prod);




// let pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// let petsCount = pets.reduce((result, pet) => {
//     if (result[pet]) {
//         result[pet]++;
//     }
//     else {
//         result[pet] = 1; //result.rabbit = 1
//     }
//     return result;
// }, {});

// console.log(petsCount);














// let num = [5, 2, 4, 20, 9, 1];
// let largestNum = num.reduce((result, num) => {
//     if (num > result) {
//         result = num;
//     }
//     return result;
// });
// console.log(largestNum);

















// JS Every Method
// let firstNum = [1,2,3,4,5,6];
// let secNum = [2,5,6];



// let isSubset = ((arr1,arr2)=>{
//         return arr2.every(item => arr1.includes(item));
// });


// let resultOfsubset = isSubset(firstNum,secNum);
// console.log(resultOfsubset);









// let checkIfevenNum = (num) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//                 if(num % 2 === 0){
//                        resolve(); 
//                 }
//                 else{
//                     reject();
//                 }
//         },1000);
//     })
// }
// checkIfevenNum(3)

// .then(()=>{
//         console.log("this is an even number");
// })

// .catch(()=>{
//     console.error("this is an error");
// })





// function checkIfEven(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (num % 2 === 0) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 1000);
//     })
// }

// checkIfEven(6)
//     .then(() => {
//         console.log('Yes it is an even number');
//     })
//     .catch(() => {
//         console.error("this is an odd number");
//     });


// let evenNum = (num)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                    if(num % 2 === 0){  
//                     resolve();
//                 }
//                 else{
//                     reject();
//                 }
//             },3000)
//         })
// }
// evenNum(10)
//     .then(()=>{
//             console.log("ths is an even number");
//     })
//     .catch(() => {
//         console.error('this is an invalid number');
//     });





// JS Class

// class Animal{
//     constructor(name,legsCount,colour){
//     this.name = name;
//     this.legsCount = legsCount;
//     this.colour = colour;
// }
// speak = "bark";
// eat(){
//     console.log(`${this.name} eats bone`);
// }
// }



// let dog = new Animal('dog',4,'white');
// console.log(dog);
// dog.eat();





































// class Animal{
//     constructor(animName,legscount){
//             this.animName = animName;
//             this.legscount = legscount;
            
//     }
// fast(){
//     console.log(`${this.animName} runs very fast`);
// }

// }
// let cat = new Animal('Cat','4');
// console.log(cat);
// cat.fast();


// class Rabit extends Animal {
//     constructor(name, legsCount, speed, quality) {
//         super(name, legsCount);
//         this.speed = speed;
//         this.quality = quality;
//     }
// }

// class Turtle extends Animal {
//     constructor(name, legsCount, quality, specialPower) {
//         super(name, legsCount);
//         this.quality = quality;
//         this.specialPower = specialPower
//     }
// }

// let rabit = new Rabit("rabit", 4, "fast", 'hide');
// let turtle = new Turtle("turtle", 4, 'consistant', "hard shell");

// console.log(rabit, turtle);










