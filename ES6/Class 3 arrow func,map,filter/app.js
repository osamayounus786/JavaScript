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
console.log(numArr,newNum);


// even numbers


let evenNum = [1,2,3,4,5,6,7,8,9];
let newEvenNum = evenNum.filter(item => item % 2 == 0);
console.log(newEvenNum);