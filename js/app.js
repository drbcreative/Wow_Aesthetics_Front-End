/* Menu Background & Scroll Top */
// const navWrapper = document.querySelector('.nav-wrapper'),
//   navBar = document.querySelector('.navbar-collapse'),
//   logoBox = document.querySelector('.logo-box'),
//   navLogo = document.querySelector('.nav-logo');

// window.addEventListener('resize', () => {
//   if (window.innerWidth < 992) {
//     navLogo.classList.remove('show');
//     navBar.classList.remove('show');
//     logoBox.classList.remove('show');
//   } else if (window.innerWidth >= 992 && window.scrollY === 0) {
//     navWrapper.classList.remove('show');
//     navLogo.classList.remove('show');

//   }
// });

// window.addEventListener('scroll', () => {
//   if (window.innerWidth >= 992 && window.scrollY > 50) {
//     navWrapper.classList.add('show');
//     navBar.classList.add('show');
//     logoBox.classList.add('show');
//     navLogo.classList.add('show');
//   } else if (window.innerWidth >= 992 && window.scrollY < 100) {
//     navWrapper.classList.remove('show');
//     navBar.classList.remove('show');
//     logoBox.classList.remove('show');
//     navLogo.classList.remove('show');
//   }
// });

/* Navbar Location */

/* Check to see window width */
const hero = document.querySelector('.hero'),
  header = document.querySelector('header'),
  navWrapper = document.querySelector('.nav-wrapper');

/* Load Menu location based on initial screen width */
document.addEventListener('DOMContentLoaded', () => {
  const winWidth = window.innerWidth;

  if (winWidth >= 1200) {
    hero.appendChild(navWrapper);
  } else {
    // do nothing
  }
});

/* Relocate Navbar based on Window Width */
window.addEventListener('resize', () => {
  const winWidth = window.innerWidth;
  if (winWidth >= 1200) {
    hero.appendChild(navWrapper);
    console.log('This is a test');

  } else if (winWidth < 1200) {
    header.appendChild(navWrapper);
    console.log('This is a dougie houser');

  }
});


/* Relocate Navbar to Footer when scrolling down page */



/* Animation */
function animateCSS(element, animationName) {

  const node = document.querySelector(element);

  /* only on scroll */
  window.addEventListener('scroll', () => {

    if (node.getBoundingClientRect().top < window.innerHeight / 1.3) {
      node.classList.add('animated', animationName);
    }

  });

  /* only on scroll */
}

/* Animation Trigger */
animateCSS('.information', 'fadeInUp');
// animateCSS('.about-us', 'fadeInUp');
animateCSS('#laser-info', 'fadeInRight');
animateCSS('#functional-info', 'fadeInLeft');
animateCSS('.functional-health', 'fadeIn');
animateCSS('#chiro-img', 'fadeInLeft');
animateCSS('#chiro-info', 'fadeInRight');
animateCSS('#aesthetics-info', 'fadeInLeft');
animateCSS('#aesthetics-img', 'fadeInRight');
animateCSS('.visit', 'fadeInUp');
animateCSS('#mas-therapy', 'fadeInUp');
animateCSS('.footer-1', 'fadeInUp');