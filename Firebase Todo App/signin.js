import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword,  onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#login");
btn.addEventListener("click", login);

async function login() {
    try {
        let { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        // console.log(user);
        // location = "./todos.html";
        console.log("success",user)
    }
    catch (e) {
        console.error(e.message);
    }
}



onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("user found");
      // ...
    } else {
      // User is signed out
      // ...
    }
  });