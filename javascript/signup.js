document.addEventListener('DOMContentLoaded', () => {

  var passwordInput = document.getElementById("password");
  var confPasswordInput = document.getElementById("conf_password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var passwordMismatch = document.getElementById('passwordMismatch');



  var phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', () => {
    const phoneNumber = phoneInput.value;
    const regex = /^[0-9]{0,11}$/;
    if (!regex.test(phoneNumber)) {
      phoneInput.value = phoneNumber.slice(0, -1);
    }

    if (phoneNumber.length !== 11) {
     
    }
  });

  
  for (let i = 1; i <= 31; i++) {
    let option = document.createElement('option');
    option.value = option.textContent = i;
    document.getElementById('day').appendChild(option);
  }

 
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  months.forEach((month, index) => {
    let option = document.createElement('option');
    option.value = index + 1;
    option.textContent = month;
    document.getElementById('month').appendChild(option);
  });


  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    let option = document.createElement('option');
    option.value = option.textContent = i;
    document.getElementById('year').appendChild(option);
  }

});
document.addEventListener('DOMContentLoaded', () => {
  var passwordInput = document.getElementById("password");
  var confPasswordInput = document.getElementById("conf_password");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  var passwordMismatch = document.getElementById('passwordMismatch');
  var phoneInput = document.getElementById('phone');

  passwordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  passwordInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

 
  passwordInput.onkeyup = function() {
 
    var lowerCaseLetters = /[a-z]/g;
    if(passwordInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    var upperCaseLetters = /[A-Z]/g;
    if(passwordInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

  
    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    if(passwordInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

 
  document.getElementById('togglePassword1').addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
  });

  document.getElementById('togglePassword2').addEventListener('click', function () {
    const type = confPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    confPasswordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
  });

 
  phoneInput.addEventListener('input', () => {
    const phoneNumber = phoneInput.value;
    const regex = /^[0-9]{0,11}$/;
    if (!regex.test(phoneNumber)) {
      phoneInput.value = phoneNumber.slice(0, -1);
    }
  });

  confPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confPasswordInput.value) {
      passwordMismatch.style.display = 'block';
    } else {
      passwordMismatch.style.display = 'none';
    }
  });

  document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (passwordInput.value !== confPasswordInput.value) {
      event.preventDefault();
      passwordMismatch.style.display = 'block';
    } else {
      passwordMismatch.style.display = 'none';
    }
  });

 
  const toggleButton = document.querySelector('.toggle');
  const body = document.querySelector('body');

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
  });
});