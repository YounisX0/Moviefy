document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fa-eye').forEach(eyeIcon => {
    eyeIcon.addEventListener('click', function () {
      const inputField = this.nextElementSibling;
      togglePasswordVisibility(inputField.id);
      this.classList.toggle('fa-eye-slash');
    });
  });

  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('conf_password').value;

    if (fullName.trim() === '') {
      alert('Please enter your full name.');
      return;
    }

    // Add email validation logic here

    if (username.trim() === '' || !username.includes('@')) {
      alert('Please pick a valid username containing "@" sign.');
      return;
    }

    if (password.trim() === '') {
      alert('Please set a password.');
      return;
    }

    if (confirmPassword.trim() === '') {
      alert('Please confirm your password.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Password complexity validation
    if (!isValidPassword(password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    // If all validations pass, submit the form
    this.submit();
  });
});

function isValidPassword(password) {
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  return (
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  );
}
