function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  let userName = prompt("What is your name?");
let usernameSpan = document.getElementById("username");
usernameSpan.innerHTML = userName;

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");
var dropdownBtn = document.querySelector(".dropdown-btn");
var dropdownContainer = document.querySelector(".dropdown-container");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("show");
});

dropdownBtn.addEventListener("click", function() {
  dropdownContainer.classList.toggle("show");
});
  



