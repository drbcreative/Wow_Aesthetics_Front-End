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