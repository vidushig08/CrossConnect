// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyANjvf0unSqOLHfO_etLGEvAfFoPnV5Q2g",
//     authDomain: "crossconnect-1caa9.firebaseapp.com",
//     projectId: "crossconnect-1caa9",
//     storageBucket: "crossconnect-1caa9.appspot.com",
//     messagingSenderId: "1068788031671",
//     appId: "1:1068788031671:web:a03a6d9c126aa3e1fb2d32",
//     measurementId: "G-G3VMZTWP7N"
//   };
// // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
//Reference form collection
var formRef=firebase.database().ref("Users");

//Listen for form submit
document.getElementById('signup-btn').addEventListener("click", submitForm);


//Submit Form
function submitForm(e){
  e.preventDefault();

  //Get values
  var name=getInputValues('signupName');
  var email=getInputValues('signupEmail');
  var phone=getInputValues('signupContact');
  var password=getInputValues('signupPassword');
  var address=getInputValues('signupAddress');
  var city=getInputValues('signupCity');
  var pincode=getInputValues('signupPincode');

  //Save form
  saveForm(name,email,phone,address,city,pincode);

  authSignup();

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide Alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
}

//Function to get form values
function getInputValues(id){
  return document.getElementById(id).value;
}

//Save message to firebase
function saveForm(name,email,phone,address,city,pincode){
  var newForm = formRef.push();
  newForm.set({
    name:name,
    email:email,
    phone:phone,
    address:address,
    city:city,
    pincode:pincode
});
}

function authSignup(){

 var email1=document.getElementById('signupEmail').value;
 var password=document.getElementById('signupPassword').value;
 
 //Create User with Email and Password
 firebase.auth().createUserWithEmailAndPassword(email1, password).catch(function(error) {

   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
 });
}