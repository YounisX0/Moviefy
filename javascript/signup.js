document.addEventListener('DOMContentLoaded', () => {
  // Password validation elements
  const passwordInput = document.getElementById("password");
  const confPasswordInput = document.getElementById("conf_password");
  const letter = document.getElementById("letter");
  const capital = document.getElementById("capital");
  const number = document.getElementById("number");
  const length = document.getElementById("length");
  const passwordMismatch = document.getElementById('passwordMismatch');

  // Phone input validation
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', () => {
    const phoneNumber = phoneInput.value;
    const regex = /^[0-9]{0,11}$/;
    if (!regex.test(phoneNumber)) {
      phoneInput.value = phoneNumber.slice(0, -1);
    }
  });

  // Password validation
  passwordInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }

  passwordInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }

  passwordInput.onkeyup = function() {
    const lowerCaseLetters = /[a-z]/g;
    if (passwordInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }

    const upperCaseLetters = /[A-Z]/g;
    if (passwordInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    const numbers = /[0-9]/g;
    if (passwordInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }

    if (passwordInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }

  // Toggle password visibility
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

  // Password confirmation validation
  confPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confPasswordInput.value) {
      passwordMismatch.style.display = 'block';
    } else {
      passwordMismatch.style.display = 'none';
    }
  });
AAAAAAA
  // Form submission handling
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    if (passwordInput.value !== confPasswordInput.value) {
      event.preventDefault();
      passwordMismatch.style.display = 'block';
    } else {
      passwordMismatch.style.display = 'none';
      // Redirect to indexpage1.html upon successful form submission
      window.location.href = '';
    }
  });

  // Theme toggle
  document.getElementById('modeToggle').addEventListener('click', function () {
    document.body.classList.toggle('light-mode');
    document.getElementById('signupText').classList.toggle('light-mode-text');
  });

  // Populate date of birth dropdowns
  const dayDropdown = document.getElementById('day');
  const monthDropdown = document.getElementById('month');
  const yearDropdown = document.getElementById('year');

  function populateDays() {
    dayDropdown.innerHTML = '<option value="" disabled selected>Day</option>';
    const selectedMonth = parseInt(monthDropdown.value);
    const selectedYear = parseInt(yearDropdown.value);
    let daysInMonth = 31; // Default to 31 days

    if (selectedMonth && selectedYear) {
      daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const option = document.createElement('option');
      option.value = day;
      option.text = day;
      dayDropdown.appendChild(option);
    }
  }

  function populateMonths() {
    monthDropdown.innerHTML = '<option value="" disabled selected>Month</option>';
    for (let month = 1; month <= 12; month++) {
      const option = document.createElement('option');
      option.value = month;
      option.text = month;
      monthDropdown.appendChild(option);
    }
  }

  function populateYears() {
    yearDropdown.innerHTML = '<option value="" disabled selected>Year</option>';
    const startYear = 1990;
    const endYear = 2024;
    for (let year = startYear; year <= endYear; year++) {
      const option = document.createElement('option');
      option.value = year;
      option.text = year;
      yearDropdown.appendChild(option);
    }
  }

  populateMonths();
  populateYears();
  populateDays();

  monthDropdown.addEventListener('change', populateDays);
  yearDropdown.addEventListener('change', populateDays);
});
