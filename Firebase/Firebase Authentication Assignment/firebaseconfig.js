
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyCVHl_D5rQz4I4wcUdY2cKhSMYwwKLE8_4",
    authDomain: "authentication-assignmen-9abb4.firebaseapp.com",
    projectId: "authentication-assignmen-9abb4",
    storageBucket: "authentication-assignmen-9abb4.appspot.com",
    messagingSenderId: "178972897010",
    appId: "1:178972897010:web:a4c743645dfd8bbbdcaa6b",
    measurementId: "G-88E1YTS8NY"
  };


   export const app = initializeApp(firebaseConfig);
 
   export const auth = getAuth(app);

   //FireStore
   export const db = getFirestore(app);
 

  



