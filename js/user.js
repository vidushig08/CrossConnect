//var coll = document.getElementsByClassName("panel-heading");
//var i;

 //for (i = 0; i < coll.length; i++) {
   //coll[i].addEventListener("click", function() {
     //this.classList.toggle("active");
//       content = this.nextElementSibling;
//      if (content.style.display === "block") {
//        content.style.display = "none";
//      } else {
//        content.style.display = "block";
//      }
//   });
//  }

var formref=firebase.database().ref("Workers");

//Listen for form submit
document.getElementById('submit-but').addEventListener("click",submitForm);
//document.getElementById('signup-btn').addEventListener("click",submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();

  //Get values
  var name=getInputValues('username');
  var phone=getInputValues('contact');
  var members=getInputValues('no-of-members');
  var destination=getInputValues('destination');
  var pincode=getInputValues('pincode');
  var medform1=getInputValues('urgent1');
  var medform2=getInputValues('urgent2');
  var medform3=getInputValues('urgent3');
  var duration=getInputValues('duration');
  var residents=getInputValues('residents');
  var summer=getInputValues('summer');
  var winter=getInputValues('winter');
  var rain=getInputValues('rain');
  var no_clothes=getInputValues('no-of-clothes');
  var q1a=getInputValues('q1a');
  var q1b=getInputValues('q1b');
  var q2a=getInputValues('q2a');
  var q2a=getInputValues('q2b');
  var q3a=getInputValues('q3a');
  var q3b=getInputValues('q3b');





  //Save form
  saveform(name,phone,members,destination,pincode,medform1,medform2,medform3,duration,residents,summer,winter,rain,no_clothes,q1a,q1b,q2a,q2b
    ,q3a,q3b);

 //authSignup();

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
function saveform(name,phone,members,destination,pincode,medform1,medform2,medform3,duration,residents,summer,winter,rain,no_clothes,q1a,q1b,q2a,q2b
    ,q3a,q3b){
  var newForm = formref.push();
  newForm.set({
    name:name,
    phone:phone,
    members:members,
    destination:destination,
    pincode:pincode,
    medform1:medform1,
    medform2:medform2,
    medform3:medform3,
    duration:duration,
    residents:residents,
    summer:summer,
    winter:winter,
    rain:rain,
    no_clothes:no_clothes,
    q1a:q1a,
    q1b:q1b,
    q2a:q2a,
    q2b:q2b,
    q3a:q2b,
    q3b:q3b
});
}

// function authSignup(){

//  var email1=document.getElementById('signupEmail').value;
//  var password=document.getElementById('signupPassword').value;
 
//  //Create User with Email and Password
//  firebase.auth().createUserWithEmailAndPassword(email1, password).catch(function(error) {

//    // Handle Errors here.
//    var errorCode = error.code;
//    var errorMessage = error.message;
//    console.log(errorCode);
//    console.log(errorMessage);
//  });
// }
