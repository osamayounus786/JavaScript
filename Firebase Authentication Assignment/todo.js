import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import {db } from "./firebaseconfig.js";




let  todo_btn = document.querySelector("#todo_btn");
let  signout_btn = document.querySelector("#signout_btn");
let todovalue = document.querySelector("#todovalue");


todo_btn.addEventListener("click",todos)
async function todos(){
    try {
        const docRef = await addDoc(collection(db, "todos"), {
          firstTodo: todovalue.value,
            
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}