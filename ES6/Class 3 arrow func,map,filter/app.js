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

















function cookFood(ing1 = "tea", ing2 = "biscuits", ...restIng) {
    let basicMeal = `Bring ${ing1} and ${ing2}`;
    let anyExtraMixture = restIng.length > 0 ? `Mixture of ${restIng}` : `Nothing extra`;
    // console.log(basicMeal, anyExtraMixture);
    return { basicMeal, anyExtraMixture };
}

let hospitality = cookFood("biryani", 'raita', 'salad', 'labe sherin');
console.log(hospitality);