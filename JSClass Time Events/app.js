// var errP = document.querySelector("#err-display");

// function showError() {
//     errP.innerHTML = "Something went wrong.";
//     clearTimeout(hideErrTime);

// }

// function hideError() {
//     errP.innerHTML = "";
// }

// var hideErrTime = setTimeout(hideError, 1000);


// setTimeout(function () {
//     errP.innerHTML = "";
// }, 10000);

// var i = 0;

// setInterval(function(){
//     console.log(i++);
// }, 1000);


// separate function for setInterval

//  var i = 0;
// function osama(){
//     console.log(i);
//     i++;
// }
// setInterval(osama,1000);

// its running continously what is the solution how to stop it ?


// var i = 0;
// function osamayounus(){
//         console.log(i++);
//         if ( i > 5){
//             clearInterval(setTimer);
//         }
// }
// var setTimer = setInterval(osamayounus, 1000);




// function waitingP(){
//     var waitingPer = document.getElementById("waitingPerson");
//     waitingPer.innerHTML = "Welcome Person you waited for 5 seconds";

// }
// setTimeout(waitingP,5000);

// task 
// set a time for 60 seconds 
var time = 60;


function setTime(){
    var h1 = document.getElementById("setTime");
    if(time < 1){
        clearInterval(stopTime);
    }
    h1.innerHTML = time--;

}
var stopTime = setInterval(setTime,1000);







































// var errP = document.querySelector("#err-display");
// var isShown = false;
// function blinkError() {
//     if (isShown) {
//         errP.innerHTML = "";
//         isShown = false;
//     }
//     else {
//         errP.innerHTML = "Something went wrong.";
//         isShown = true;
//     }
// }

// setInterval(blinkError, 1000);



















// var i = 0;
// var printIter = setInterval(function () {
//     console.log(i);
//     if (i === 10) {
//         clearInterval(printIter);
//     }
//     i++;
// }, 1000)

// function stopIter() {
//     clearInterval(printIter);
// }



















// var timerH1 = document.querySelector("#msg");
// setTimeout(startTimer, 1000);
// var count = 9;
// var timerIntervalRef;
// function startTimer() {
//     timerIntervalRef = setInterval(updateTimer, 1000)
// }
// function updateTimer() {
//     timerH1.innerHTML = count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString() + count.toString();
//     if (count < 0) {
//         timerH1.innerHTML = "Boooom!";
//         clearInterval(timerIntervalRef);
//     }
//     count--;
// }