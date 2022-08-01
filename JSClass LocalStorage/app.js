// var userName = prompt("What is your name");
// localStorage.setItem("Student Name", userName);
//   localStorage.getItem('studentName');
//   console.log(localStorage.getItem('studentName'));
 





var stName = document.querySelector("#student-name");
function addStudent() {
    var allStudents = localStorage.getItem('students');
    if (allStudents) {
        allStudents = JSON.parse(allStudents);
    }
    else {
        allStudents = [];
    }
    allStudents.push(stName.value);
    allStudents = JSON.stringify(allStudents);
    localStorage.setItem('students', allStudents);

    stName.value = "";

}
// // Set Item
// localStorage.setItem("lastname", "Younus");
// // Retrieve
// document.getElementById("demo").innerHTML = localStorage.getItem("lastname");
// // localStorage.clear();