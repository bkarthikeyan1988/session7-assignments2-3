$(document).ready(function() {
    // Password Validation Ends
    var password = document.getElementById("password"), 
        confirm_password = document.getElementById("confirm_password");

    function validatePassword(){
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;

    // Local Storage
    if (!window.localStorage) {
        alert('Your browser does not support HTML5 localStorage. Try upgrading.');
    } else {
        $("#registrationForm").submit(function(){
            setAllItems();
        });                     
    }

});

var setAllItems = function(){
    var newDate, itemId, formSave;
    newDate = new Date();
    itemId = newDate.getTime();
        formSave = {
        fname       : $("#inputFName").val(),
        lname       : $("#inputLName").val(),
        unanme      : $("#inputUsrName").val(),
        email       : $("#inputEmail").val()
    };
    localStorage.setItem( itemId, JSON.stringify(formSave));
    };