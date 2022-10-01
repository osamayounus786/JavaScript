import {auth} from "./firebaseconfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword,onAuthStateChanged,signOut,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";





let email = document.querySelector("#email");
let password = document.querySelector("#password");

let register_btn = document.querySelector("#register_btn");
register_btn.addEventListener("click",signupUser)
   async function signupUser(){ 
       
       try{
           let user = await createUserWithEmailAndPassword(auth, email.value, password.value)
           
           verifyEmail(); //calling for verifying
    }
    catch(e){
        console.log(e);
    }
}
// verify email 
async function verifyEmail(){
  await sendEmailVerification(auth.currentUser);
  console.log("Please verify your email address");
}



// sign in existing user







 let login_btn = document.querySelector("#login_btn");
 let login_email = document.querySelector("#login_email");
 let login_password = document.querySelector("#login_password");
 
 login_btn.addEventListener("click",signinUser)
   async function signinUser(){
    try{
       let {user} = await signInWithEmailAndPassword(auth, login_email.value, login_password.value)
      console.log(user,"logged in successfully");
    }
    catch(e){
      console.log(e);
    }
    
 }


 // onAuthStateChanged

 onAuthStateChanged(auth, (user) => {
  if (user) {
 console.log('user found', user);
    const uid = user.uid;
    // ...
  } else {
       console.log('user not found', user)
  }
});
  


// signout

 let signout_btn = document.querySelector("#signout_btn");
 signout_btn.addEventListener("click",signOutp);
 async function signOutp(){

     await signOut(auth);
   };


   //password reset
    let reset_btn = document.querySelector("#reset_btn");
    reset_btn.addEventListener("click",resetPassword)
   async function resetPassword(){

     try{
       
       await sendPasswordResetEmail(auth, email.value);
       console.log("check your email to reset password");
  }
  catch(e){
    console.log(e);
  }
   
}
