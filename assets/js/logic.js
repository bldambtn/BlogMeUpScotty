// Targets the back button and allows the
// user to navigate back to index.htm
// also called the landing page that contains the
// blog submission form
const backButton = document.querySelector("#back-btn");

backButton.addEventListener("click", function (event) {
  if (backButton) {
    window.location.href = "index.html";
  }
});

// Access toggle switch HTML element
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to light
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is light, apply dark background
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
  // If mode is light, apply dark background
  else {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
});