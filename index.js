// selecting elements
const humberger = document.querySelector(".fa-bars");
const navbar = document.querySelector(".navbar_menu");
const logo = document.querySelector(".logo");
const close = document.querySelector(".fa-times-circle");

// bumberger onClocick
humberger.addEventListener("click", function () {
  navbar.style.right = "0";
});

// close onclick
close.addEventListener("click", function () {
  navbar.style.right = "-290px";
});
