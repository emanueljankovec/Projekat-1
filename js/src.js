var toggleButton = document.querySelector('.toggle-button');
var navbarLinks = document.querySelector('.navbar-links');
var home = document.querySelector('.home');


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  home.classList.toggle('active');
})


var menuBtn = document.querySelector('.toggle-button');
var hamburger1 = document.getElementsByClassName('bar')[0];
var hamburger2 = document.getElementsByClassName('bar')[1];
var hamburger3 = document.getElementsByClassName('bar')[2];
var menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    hamburger1.classList.add('bar-2');
    hamburger2.classList.add('bar-2');
    hamburger3.classList.add('bar-2');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    hamburger1.classList.remove('bar-2');
    hamburger2.classList.remove('bar-2');
    hamburger3.classList.remove('bar-2');
    menuOpen = false;
  }
});