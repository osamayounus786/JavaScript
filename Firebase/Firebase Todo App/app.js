import { auth, db } from "./firebaseconfig.js";
import { createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");

let username = document.querySelector("#username");
let lastName = document.querySelector("#last-name");
let rollNum = document.querySelector("#roll-number");
let subject = document.querySelector("#subject");
let address = document.querySelector("#address");



let btn = document.querySelector("#register");
btn.addEventListener("click", signupUser);

async function signupUser() {
    try {
        let user = await createUserWithEmailAndPassword(auth, email.value, password.value);
        let userDocRef = doc(db, 'users', user.user.uid);
        await setDoc(userDocRef, {
            username: username.value,
            lastName: lastName.value,
            rollNum: rollNum.value,
            subject: subject.value,
            address: address.value,
            email: email.value
        });

        verifyEmail()
    }
    catch (e) {
        console.error(e);
    }
}

async function verifyEmail() {
    await sendEmailVerification(auth.currentUser);
    console.log('please check your email address and confirm.')
}



