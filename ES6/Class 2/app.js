
// Destructuring


// let cars = ['Bugati','Black','2022'];

// let [cName,color,model] = cars;
// console.log(cName,color,model);

//output: Bugati Black 2022






/*If we only want the cName and
  Model we can simply leave out the color but keep the comma:
*/
// When destructuring arrays, the order that variables are declared is important.
//  let cars = ['Bugati','Black','2022'];

//  let [cName,,model] = cars;
//  console.log(cName,model);

//  output: Bugati 2022










// Destructuring an object

// let pName = {
//     uName: 'Osama',
//     age: 24,
//     classp: 'JS'
// }


// let {uName,classp} = pName;
// console.log(uName,classp);

//  output: Osama JS










// Destructuring an object from function

// function greetUser({pName,position,Expertise}){
//     let objResult = `${pName} ${position} ${Expertise}`;
//     console.log(objResult);
// }

// let pObj = {
//     pName: 'Osama',
//     position: 'Frontend Developer',
//     Expertise: ' Learning'

// }

// greetUser(pObj);

//  output: Osama Frontend Developer learning




let veg1 = ['tomato','potato','chilli'];
let veg2 = ['onion','mint','ladyfinger'];

console.log(veg1.concat(veg2));


