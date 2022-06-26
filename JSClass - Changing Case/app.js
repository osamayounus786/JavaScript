// var checkCity = prompt("Enter the city name");
//     checkCity = checkCity.toLowerCase();
// var cleanestCity = ["karachi","lahore","punjab","balochistan","kpk"];

// for(i = 0; i <=4; i++){
//     if(checkCity === cleanestCity[i]){
//         console.log(checkCity + " " + "is cleanest city in Pakistan");
//     }
   
// }



// var cityToCheck = prompt("Enter the city name");
// var firstChar = cityToCheck.slice(0,1 );  // hello speach
// // console.log(firstChar);
//  var otherChars = cityToCheck.slice(1);
// //  console.log(otherChars);
//  firstChar = firstChar.toUpperCase();
//  otherChars = otherChars.toLowerCase();
//  var cappedCity = firstChar + otherChars;
// console.log(cappedCity);





// var month = prompt("Enter a month");
//  var charsInMonth = month.length;
//  if (charsInMonth > 3) {
//  monthAbbrev = month.slice(0, 3);
//  console.log(monthAbbrev);
// }










// var week = prompt("Enter a day name");
// var weekLenght = week.length;
// if (weekLenght > 3){
//     var weekAbrev = week.slice(0,3);
//     console.log(weekAbrev);
// }






 var str = prompt("Enter some text");
 var numChars = str.length;
 for (var i = 0; i < numChars; i++) {
 if (str.slice(i, i + 2) === " ") {
 console.log(numChars[i]);
break;
 }
}


