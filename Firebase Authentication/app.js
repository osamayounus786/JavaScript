
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
  import { getAuth, 
    createUserWithEmailAndPassword,signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAja_dbMXNiGLDuctNyoWigWpPMgxWjK90",
    authDomain: "login-test-bee66.firebaseapp.com",
    projectId: "login-test-bee66",
    storageBucket: "login-test-bee66.appspot.com",
    messagingSenderId: "696449846463",
    appId: "1:696449846463:web:d3f51fbed3c65a6e470a0a",
    measurementId: "G-PBXQEM43RX"
  };

  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  const auth = getAuth();
//Register
  let register_btn = document.querySelector("#register_btn");

  register_btn.addEventListener("click",function(){
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    
    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("successfully Register",user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("error occur",errorMessage);
      // ..
    });

});
//login
let login_btn = document.querySelector("#login_btn");

login_btn.addEventListener("click",function(){
    let login_email = document.querySelector("#login_email");
    let login_password = document.querySelector("#login_password");
    signInWithEmailAndPassword(auth, login_email.value, login_password.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("Successfully",user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("error hai baba",errorMessage);
  });
});