import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcWq93b-KLrKl8tLwQWGARzzV2KSrsqSc",
    authDomain: "chappy-website.firebaseapp.com",
    projectId: "chappy-website",
    storageBucket: "chappy-website.appspot.com",
    messagingSenderId: "404025673322",
    appId: "1:404025673322:web:72bfb564a7ef8753b2ac13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(); // Initialize Firebase Authentication

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)

            alert("Account created successfully!");
            window.location.href = "grand.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});