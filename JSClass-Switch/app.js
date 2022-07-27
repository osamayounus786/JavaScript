var dayOfweeks = prompt("What day is today?");
switch (dayOfweeks){
    case "Sun":
    alert("its sunday");
    break;
    case "Mon":
        alert("Its is monday");
        break;
        case "Tue":
    alert("its tuesday");
    break;
    case "Wed":
        alert("Its is wednesday");
        break;
    case "Thu":
        alert("Its is Thursday");
        break;
    case "Fri":
        alert("Its is Friday");
        break;
    case "Sat":
        alert("Its is S");
        break;
}

var a = 10;
var b = 15;
var Calcu = prompt("Write mathematics operater to do operation of a & b");
switch (Calcu){
    case "+":
    alert(a + b);
    break;
    case "-":
        alert(a - b);
        break;
        case "*":
    alert(a * b);
    break;
    default:
        alert("wrong command");
}