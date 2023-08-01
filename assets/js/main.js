/*=============== SHOW MENU ===============*/
// Get references to the navigation elements
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
// Validate if constant exists
if (navToggle) {
    // Add a click event listener to the navigation toggle button
    navToggle.addEventListener('click', () =>{
        // When clicked, toggle the 'show-menu' class on the navigation menu
        navMenu.classList.toggle('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
// Validate if constant exists
if (navClose) {
    // Add a click event listener to the navigation close button
    navClose.addEventListener('click', () =>{
        // When clicked, remove the 'show-menu' class from the navigation menu
        navMenu.classList.remove('show-menu');
    });
}


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/


