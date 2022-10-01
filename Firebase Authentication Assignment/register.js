import {app} from "./firebaseconfig.js";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";



const auth = getAuth(app);

let email = document.querySelector("#email");
let password = document.querySelector("#password");

let register_btn = document.querySelector("#register_btn");
register_btn.addEventListener("click",signupUser)
   async function signupUser(){ 
       
       try{
           let user = await createUserWithEmailAndPassword(auth, email.value, password.value)
           console.log("successfully",user);
    }
    catch(e){
        console.log(e);
    }
}





// sign in existing user







 let login_btn = document.querySelector("#login_btn");
 login_btn.addEventListener("click",function(){
    let login_email = document.querySelector("#login_email");
    let login_password = document.querySelector("#login_password");
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("successfully loged in ",user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error",errorMessage);
    });
 })


 
  
