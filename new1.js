// selecting elements
const humberger = document.querySelector(".fa-bars");
const navbar = document.querySelector(".menu-items");
const logo = document.querySelector(".navbar");
const close = document.querySelector(".fa-times-circle");

// bumberger onClocick
humberger.addEventListener("click", function () {
  navbar.style.right = "0px";
});

// close onclick
close.addEventListener("click", function () {
  navbar.style.right = "-290px";
});