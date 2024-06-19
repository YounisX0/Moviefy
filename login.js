function showPassword() {
    var password = document.getElementById("password");
    var icon = document.querySelector(".fas");
    if (password.type === "password") {
      password.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-light");
    } else {
      password.type = "password";
      icon.classList.remove("fa-eye-light");
      icon.classList.add("fa-eye");
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Static username and password
    var staticUsername = "webproject";
    var staticPassword = "123";
  
    if (username === staticUsername && password === staticPassword) {
      // Successful login
      alert("Login successful!");
      window.location.href = "index.html"; // Redirect to index.html
    } else {
      // Display error message
      document.getElementById("errorMessage").style.display = "block";
      
      document.getElementById('modeToggle').addEventListener('click', function () {
        document.body.classList.toggle('active');
        document.querySelector('header').classList.toggle('active');
        document.querySelector('.logo').classList.toggle('active');
        document.querySelector('.signup-text').classList.toggle('active');
        document.querySelector('.toggle-ball').classList.toggle('active');
        document.getElementById('togglePassword').classList.toggle('active');
        this.classList.toggle('active');
        
        
      });
      
    }
  });
  