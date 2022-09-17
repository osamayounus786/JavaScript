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
let numArr = [1,2,3,4,5,6,7,8,9];
let newNum = numArr.filter (item => item >= 5);
// console.log(numArr,newNum);


// even numbers


let evenNum = [1,2,3,4,5,6,7,8,9];
let newEvenNum = evenNum.filter(item => item % 2 == 0);
// console.log(newEvenNum);




let reduceNum = [1,2,3,4,5,6,7,8,9];
let newRenum = reduceNum.reduce((num1,num2,num3) =>{ 
     return num1 + num2 - num3;
});
// console.log(newRenum);




// map
let laptops = ['HP','MacBook','Dell','Lenovo','Asus'];
let newLaptops = laptops.map(item => item.toLowerCase(laptops));
console.log(newLaptops);


// filter
let oddNums = [1,23,4,5,6,67,9,0,8];
let oddResult = oddNums.filter(items => items %2 == 1);
console.log(oddResult);


// reduce
let primeNum = [1,3,5,7,11,13,19];
let newPrime = primeNum.reduce((num1,num2) => {
     return num1 + num2;
});
console.log(newPrime);


