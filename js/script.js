'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // ==============================
  // Slick
  // ==============================
  $('.fv__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 3000,
    arrows: false,
  });


  // ==============================
  // ハンバーガーメニュー
  // ==============================
  const hamburger = document.querySelector('.hamburger');
  const spNav = document.querySelector('.sp-nav');

  if (hamburger && spNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      spNav.classList.toggle('active');
    });
  }


  // ==============================
  // ヘッダー背景（about到達）
  // ==============================
  const header = document.querySelector('.header');
  const aboutSection = document.querySelector('#about');

  if (header && aboutSection) {
    window.addEventListener('scroll', () => {
      const headerHeight = header.offsetHeight;
      const aboutTop = aboutSection.offsetTop - headerHeight;

      if (window.scrollY >= aboutTop) {
        header.classList.add('is-colored');
      } else {
        header.classList.remove('is-colored');
      }
    });
  }


  // ==============================
  // ロゴクリックでトップへ
  // ==============================
  const logoLink = document.querySelector('.header__logo a');

  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }


  // ==============================
  // SPナビクリックで閉じる
  // ==============================
  const spNavLinks = document.querySelectorAll('.sp-nav a');

  spNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (spNav && hamburger) {
        spNav.classList.remove('active');
        hamburger.classList.remove('active');
      }
    });
  });


  // ==============================
  // モーダル
  // ==============================
  const modalLinks = document.querySelectorAll('.works-item__link');

  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const target = link.dataset.target;
      const modal = document.getElementById(target);

      if (!modal) return;

      document.documentElement.classList.add('is-fixed');
      document.body.classList.add('is-fixed');

      modal.classList.add('is-active');
    });
  });

  const modals = document.querySelectorAll('.modal');

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.modal__content-close');
    const overlay = modal.querySelector('.modal__overlay');

    function closeModal() {
      modal.classList.remove('is-active');

      document.documentElement.classList.remove('is-fixed');
      document.body.classList.remove('is-fixed');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);
  });


  // ==============================
  // トップへ戻るボタン
  // ==============================
  const topBtn = document.querySelector('.top-back-btn');
  const footer = document.querySelector('footer');
  const modal = document.querySelector('.modal');

  function updateTopBtn() {
    if (!topBtn || !footer) return;

    const scrollY = window.scrollY;
    const fvHeight = window.innerHeight;
    const footerTop = footer.offsetTop;

    if (modal && modal.classList.contains('is-active')) {
      topBtn.classList.remove('show');
      return;
    }

    if (scrollY > fvHeight && scrollY < footerTop - 50) {
      topBtn.classList.add('show');
    } else {
      topBtn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', updateTopBtn);
  window.addEventListener('load', updateTopBtn);


  // ==============================
  // フェードアップ
  // ==============================
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40% 0px"
  });

  elements.forEach(el => observer.observe(el));

});