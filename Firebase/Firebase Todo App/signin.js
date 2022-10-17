import { auth } from "./firebaseconfig.js";
import { signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let btn = document.querySelector("#login");
btn.addEventListener("click", login);

async function login() {
    try {
        let { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
        // console.log(user);
        location = "./todos.html";
    }
    catch (e) {
        console.error(e.message);
    }
}

















onAuthStateChanged(auth, (user) => {
    if (user) {
    //  console.log('user found', user);
      const uid = user.uid;
      // ...
    } else {
        // console.log('user not found', user)
    }
  });

