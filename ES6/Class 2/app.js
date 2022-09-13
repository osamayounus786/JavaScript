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

























//Spread Operator

let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];

console.log(...odd, ...even);
//output: 1 3 5 7 2 4 6 8

// console.log(veg1.concat(veg2));

// The spread operator is often used in combination with destructuring.

const numbers = [1, 2, 3, 4, 5, 6];

const [one, two, ...rest] = numbers;

console.log(one, two, ...rest);

//output: 1 2 3 4 5 6

//spread operator with objects:
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);
/*Notice the properties that did not match were combined,
  but the property that did match, color,
 was overwritten by the last object that was passed, updateMyVehicle.
  The resulting color is now yellow.*/
//output: {brand: 'Ford', model: 'Mustang', color: 'yellow', type: 'car', year: 2021}





















// function dot(x,...y){
// console.log(x,y);
// }

// dot(3,'hello','this is Y','InArray');

// function groceriesBill(firstName,lastName,...items){
//       console.log(`ThankYou ${firstName} ${lastName} for buying ${items}`)
// }
// groceriesBill('Osama','Younus','daal','sabzi','lux','shampoo');

// let firstName = 'John';
// let lastNames = 'Wick';

// let celeb = {
//   firstName,
//   lastNames,
//   age: 54
// }

// console.log(celeb);

// let newFun = () =>{
//   console.log('hello world this is arrow fucntion');
// }
// newFun();

// let people = (pName,age) =>{
// console.log(`${pName} ${age}`);
// }
// people('Osama','24');

// let oneLineFun = ()=> console.log('this is one line fucntion');
// oneLineFun();
