import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth , onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyArWxUemkVd6A86Zy7GT4GXFQ_hHIvlLRY",
  authDomain: "simple-login-form-51161.firebaseapp.com",
  projectId: "simple-login-form-51161",
  storageBucket: "simple-login-form-51161.appspot.com",
  messagingSenderId: "533463497704",
  appId: "1:533463497704:web:19ffe5cb5ac0248c34425d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);