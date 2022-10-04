import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAqWREFUI1tp0hCX-lyA_LDBq8vt7JWaNY",
    authDomain: "voting-9fffc.firebaseapp.com",
    projectId: "voting-9fffc",
    storageBucket: "voting-9fffc.appspot.com",
    messagingSenderId: "812175387122",
    appId: "1:812175387122:web:164ef26c1f2a59e5b4e36b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();