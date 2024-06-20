let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

var confpassword = document.getElementById("conf_password")
, conf_password = document.getElementById("conf_password");

function validatePassword(){
if(confpassword.value != conf_password.value) {
    conf_password.setCustomValidity("Passwords Don't Match");
} else {
    conf_password.setCustomValidity('');
}
}

confpassword.onchange = validatePassword;
conf_password.onkeyup = validatePassword;