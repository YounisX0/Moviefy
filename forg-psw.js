function toggleTheme() {
    var body = document.body;
    var header = document.querySelector('header');
    var logo = document.querySelector('.logo');
    var navLinks = document.querySelectorAll('.nav-link');
    var copy = document.querySelector('.copy');
    var toggle = document.querySelector('.toggle');
    var toggleBall = document.querySelector('.toggle-ball');
  
    body.classList.toggle('active');
    header.classList.toggle('active');
    logo.classList.toggle('active');
    copy.classList.toggle('active');
  
    navLinks.forEach(function(link) {
      link.classList.toggle('active');
    });
  
    toggle.classList.toggle('active');
    toggleBall.classList.toggle('active');
  }
  