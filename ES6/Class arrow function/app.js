// Normal Function

function helloBasic(){
    console.log("hello basic function")
}
helloBasic();


// advance function

let osama = () => console.log("this is osama"); // if one code of line
osama();


const helloAdvance = () =>{ // if more than one line use { }
    console.log("hello advance fucntion")
    console.log("hello javascript")
}
helloAdvance();

// another example 

let userGreet = (name) =>{
    return `hello welcome ${name}`;
}

console.log(userGreet('Osama Younus'));

// without curly brackets
let userGreet1 = (name) => `hello welcome ${name}`;
console.log(userGreet('Osama Younus'));

// without round brackets

let userGreet2 = name => `hello welcome ${name}`;
console.log(userGreet('Osama Younus'));