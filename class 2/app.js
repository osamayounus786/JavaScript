// alert
// alert("Hello this osama");

// prompt 
// var regularQ = prompt("What are you doing");
// console.log(regularQ);

// confirm 
//  var yesOno = confirm("Are you sure to delete this file");
//  console.log(yesOno);

// making some mathemeatics
// var mathSub = +prompt("Please insert math marks");
// var urduSub = +prompt("Please insert urdu marks");
// var separate = ("");
// console.log("maths marks are",mathSub +  separate,"Urdu marks are",urduSub);

// percentage of subjects
// var subMath = +prompt ("Please inster Math marks");
// var subUrdu = +prompt ("Please inster Math marks");
// var subIslam = +prompt ("Please inster Math marks");
// var subSocial = +prompt ("Please inster Math marks");

// var obtMarks = (subIslam + subMath + subSocial + subUrdu);

// var totalMarks = obtMarks / 400 * 100;
// console.log(totalMarks);


// function calcuPercentage()
// {
//     var subMath = +prompt ("Please inster Math marks");
// var subUrdu = +prompt ("Please inster Math marks");
// var subIslam = +prompt ("Please inster Math marks");
// var subSocial = +prompt ("Please inster Math marks");

// var obtMarks = (subIslam + subMath + subSocial + subUrdu);

// var totalMarks = obtMarks / 400 * 100;
// console.log(totalMarks + "%");

// }
// calcuPercentage();

// function bringtea()
// {
//     console.log("Bring tea")
// }
// bringtea();

// function mechanic(tunning,oilChange,puncture,client) {
//     console.log("your payment of " + tunning, " "  + oilChange, " " + " and " + puncture + " are " + " Mr." +client )
// }
// mechanic(300,400,70,"Osama");



// var heading = document.querySelector("h1");
// console.log(heading.innerHTML);


// var button1 = document.querySelector("button");
// console.log(button1.innerHTML);

// var inputEl = document.querySelector("#inputEl");
// var greetUser = document.querySelector("#greet-user");

// function register(){

//     greetUser.innerHTML = "Welcome Mr. " + inputEl.value;
//     console.log(greetUser.innerHTML);
    
// }


// function clearFunc(){

//     inputEl.value = "";
//     greetUser.innerHTML = "";
// }

// var pName = document.querySelector("#province-name");

// function LiveInKarachi () {

//     pName.innerHTML = "You Live In Sindh"
// }
// function LiveInPeshawar () {

//     pName.innerHTML = "You Live In KPK"
// }
// function LiveInQuetta () {

//     pName.innerHTML = "You Live In Balochistan"
// }
// function LiveInLahore () {

//     pName.innerHTML = "You Live In Punjab"
// }
// function LiveInIslamabad () {

//     pName.innerHTML = "You Live In Capital"
// }

// var pName = document.querySelector("#province-name");

// function liveInProvince(provineName) {
//     pName.innerHTML = "You live in " + provineName;
// }


// var perName = document.querySelector("#person-salary");

// function salaryOfp1() {
//     perName.innerHTML = "Your Salary is 500$"
// }
// function salaryOfp2() {
//     perName.innerHTML = "Your Salary is 700$"
// }
// function salaryOfp3() {
//     perName.innerHTML = "Your Salary is 800$"
// }
// function salaryOfp4() {
//     perName.innerHTML = "Your Salary is 600$"
// }
// function salaryOfp5() {
//     perName.innerHTML = "Your Salary is 300$"
// }

perName = document.querySelector("#person-salary");

function  salaryOf(salaryofperson){

    perName.innerHTML = "Mr. Your Salary is" + salaryofperson; 
}