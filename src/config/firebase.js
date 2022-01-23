import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyD0tiKEIYWNGTl4wIdQuxC1YgscPIsWnR0",
    authDomain: "smtp-firebase-reactjs-learning.firebaseapp.com",
    projectId: "smtp-firebase-reactjs-learning",
    storageBucket: "smtp-firebase-reactjs-learning.appspot.com",
    messagingSenderId: "133252675320",
    appId: "1:133252675320:web:8ae638f07092b85d49ad0d",
    measurementId: "G-HRV7PSRPYS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export const db=firebase.firestore();