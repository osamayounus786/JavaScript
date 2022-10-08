import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";





const firebaseConfig = {
  apiKey: "AIzaSyBegFC0zOeO4Cd3Af5gVTh_-SlmGIdnVr8",
  authDomain: "fir-todo-app-d0587.firebaseapp.com",
  projectId: "fir-todo-app-d0587",
  storageBucket: "fir-todo-app-d0587.appspot.com",
  messagingSenderId: "1070653619681",
  appId: "1:1070653619681:web:bc7b27738eeace8df026a0"
};


 export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);