// var now = new Date();
// console.log(now);


// var daysName = ["Sun","Mon","tues","Wed","Thu","Fri","Sat"];
// var now = new Date();
// // console.log(daysName);
// console.log(daysName[now.getDay()]);





















// var now = new Date("February 14, 2022");
// console.log(now);



























// var now = new Date();
// console.log(now.getDay());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());
// console.log(now.getTime());




// find out how many days are remaining for the course end




var realTime = (new Date().getTime());
// console.log(realTime);

var birDate = (new Date("October 14, 1996").getTime());
// console.log(birDate);
var myBirDate = realTime - birDate;
// console.log(myBirDate);
var resBirDate = myBirDate /1000 /60 /60 /24;
console.log(Math.ceil(resBirDate));