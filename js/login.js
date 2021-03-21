// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyANjvf0unSqOLHfO_etLGEvAfFoPnV5Q2g",
    authDomain: "crossconnect-1caa9.firebaseapp.com",
    projectId: "crossconnect-1caa9",
    storageBucket: "crossconnect-1caa9.appspot.com",
    messagingSenderId: "1068788031671",
    appId: "1:1068788031671:web:a03a6d9c126aa3e1fb2d32",
    measurementId: "G-G3VMZTWP7N"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();



var email = document.getElementById("loginEmail");
var password = document.getElementById("loginPassword");

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
auth.onAuthStateChanged(function(user){
    if(user){
        window.location.replace("users.html");
        //is signed in
    }
    else{   
        alert("User not found");
        //no user is signed in
    }
});



firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
  
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });