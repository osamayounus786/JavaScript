import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyB6pLTtXF6aTaUULJF94YiIg5JN5tEJENU",
    authDomain: "current-class-task.firebaseapp.com",
    projectId: "current-class-task",
    storageBucket: "current-class-task.appspot.com",
    messagingSenderId: "941159065516",
    appId: "1:941159065516:web:fcbb100e17bbc0a2073c09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);