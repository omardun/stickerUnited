document.addEventListener("DOMContentLoaded", function(){
    fields.fullName = document.getElementById('fullName');
    fields.email = document.getElementById('email');
    fields.phoneNumber = document.getElementById('phoneNumber');
    fields.message = document.getElementById('message');

})


function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }

   function isValid() {
    var valid = true;
    valid &= fieldValidation(fields.fullName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.phoneNumber, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);
    return valid;
   }

   class User {
    constructor(fullName, email, phoneNumber, message) {
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.message = message;
    }
   }


function sendContact() {
    if (isValid()) {
        let usr = new User(fullName.value, email.value, phoneNumber.value, message.value);

        SubtleCrypto(`${usr.fullName} thanks for your message.`)
    } else {
        alert("There was an error")
    }
}

