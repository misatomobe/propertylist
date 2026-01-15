'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // ===============================
  // ハンバーガーメニュー
  // ===============================
  const hamburger = document.querySelector('.hamburger');
  const spNav = document.querySelector('.sp-nav');

  if (hamburger && spNav) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('active');
      spNav.classList.toggle('active');
    });
  }

  // ===============================
  // ヘッダーの背景変更（about 到達）
  // ===============================
  const header = document.querySelector('.header');
  const aboutSection = document.querySelector('#about');

  if (header && aboutSection) {
    window.addEventListener('scroll', function () {
      const headerHeight = header.offsetHeight;
      const aboutTop = aboutSection.offsetTop - headerHeight;

      if (window.scrollY >= aboutTop) {
        header.classList.add('is-colored');
      } else {
        header.classList.remove('is-colored');
      }
    });
  }

  // ===============================
  // ロゴクリックでトップへスムーズスクロール
  // ===============================
  const logoLink = document.querySelector('.header__logo a');

  if (logoLink) {
    logoLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===============================
  // SPナビリンククリックで閉じる
  // ===============================
  const spNavLinks = document.querySelectorAll('.sp-nav a');

  spNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      spNav.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

});