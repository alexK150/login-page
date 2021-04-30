import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAERIeMVL9NK-RaSzzzLf237o9yDm8Yadg",
  authDomain: "login-cd50b.firebaseapp.com",
  projectId: "login-cd50b",
  storageBucket: "login-cd50b.appspot.com",
  messagingSenderId: "251914681406",
  appId: "1:251914681406:web:2efd4f5a7782c9392a656f"
};
// Initialize Firebase
const fireBase = firebase.initializeApp(firebaseConfig);

export default fireBase;