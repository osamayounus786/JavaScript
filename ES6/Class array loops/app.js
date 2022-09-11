 const user = ['apple','Mango','Banana'];


for(i=0; i<user.length; i++){
    console.log(user[i]);
}


user.forEach((element)=>{
    console.log(element);
})


let veg = ['Tomato','Carrot','Onion','Chilli','Potato'];

veg.forEach((index)=>{
    console.log(index);
})


//array from

let arr = 'Osama';
let newArr = Array.from(arr);
console.log(newArr);


// for of

let num = ['1','2','3','4'];
for(let i of num){
    console.log(i);
}
        console.log('this is for in');
for(let newI in num){
    console.log(num[newI]);
}