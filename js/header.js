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

// メインロゴクリックでトップへスムーズスクロール
const logoLink = document.querySelector('.header__logo a');
logoLink.addEventListener('click', function (e) {
  e.preventDefault(); // 通常のリンク遷移を防止
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // スムーズスクロール
  });
});

// ドロワー内リンククリックで閉じる
const spNavLinks = document.querySelectorAll('.sp-nav a');

spNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    spNav.classList.remove('active');
    hamburger.classList.remove('active');
  });
});