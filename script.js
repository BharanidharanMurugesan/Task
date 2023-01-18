function encryptPassword(password) {
    // encryption logic here
  }
  
  function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function forgotPassword() {
    var modal = document.getElementById("forgot-password-modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("forgot-password-modal");
    modal.style.display = "none";
  }
  
  function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    } else {
      // submit the form or send a password reset email
    }
  }
     



  
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("menu-active");
  }
  