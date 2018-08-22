"use strict";



var regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

var regexNames = /^[a-zA-Z ]{2,30}$/;







function validate(){
  var lastName = document.getElementById("lastName");
  var firstName = document.getElementById("firstName");
  var gender = document.getElementById("gender");
  var message = document.getElementById("message");
  var email = document.getElementById("email");













 if(lastName.value==""){
   alert('Bitte den Nachnamen ausfüllen.');

   return false;
 }
 else if(firstName.value==""){
   alert('Bitte den Vornamen ausfüllen.');

   return false;
 }
     else if(gender.value=="blank"){
         alert("Wähle bitte ein Geschlecht aus.");

         return false;
     }
     else if (email.value==""){
         alert("Bitte Email ausfüllen.");

         return false;
     }else if (message.value==""){
         alert("Bitte Message eintippen.");

         return false;
     }
 else

alert("Message erfolgreich abgeschickt!")

   return true;

 }






   function validateLastName(){
      var lastName = document.getElementById("lastName");
       if (!regexNames.test(lastName.value)){
               alert("Enter a valid Lastname. No numbers and special characters!");
               return false;
               }else
                   return true;
   }


 function validateFirstName(){
     var firstName = document.getElementById("firstName");
  if(!regexNames.test(firstName.value)){
            alert("Enter a valid Firstname. No numbers and special characters!");
            return false;
            }else
            return true;
 }





   function validateEmail(){
        var email = document.getElementById("email");

           if(!regexEmail.test(email.value)){
               alert("Enter a valid email.");
               return false;
               }else
                   return true;
   }
