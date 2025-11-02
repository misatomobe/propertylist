'use strict';

const hamburger = document.querySelector('.hamburger');
const spNav = document.querySelector('.sp-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active');
  spNav.classList.toggle('active');
});

// ヘッダーの背景変更
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const aboutSection = document.querySelector('#about');
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop - 50) {
    header.classList.add('is-colored');
  } else {
    header.classList.remove('is-colored');
  }
});