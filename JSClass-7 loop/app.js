
for(i = 0; i < 10; i++){
    console.log("Hello" + i);
}

var tableName = +prompt("Which table you want?");
var tableLimit = +prompt("how many times you want it to be count");

for(tableTime = 0; tableTime < tableLimit + 1; tableTime++){
    console.log(tableName + " X " + tableLimit + " = " + tableName * tableTime);
}
