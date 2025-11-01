'use strict';

const hamburger = document.querySelector('.hamburger');
const spNav = document.querySelector('.sp-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  spNav.classList.toggle('active');
});