import { auth } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";



let email = document.querySelector("#email");
let password = document.querySelector("#password");




let btn = document.querySelector("#register");
btn.addEventListener("click", signupUser);

async function signupUser() {
    try {
        let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
       console.log("sucessfully Registered",user)
    }
    catch (e) {
        console.error("Error occur",e);

    }
}



