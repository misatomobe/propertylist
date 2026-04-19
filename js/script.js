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
// ヘッダー背景
// ==============================
$(window).on('scroll', function () {
  const $header = $('.header');
  const $about = $('#about');

  if (!$header.length || !$about.length) return;

  const headerHeight = $header.outerHeight();
  const aboutPos = $about.offset().top - headerHeight;
  const scrollTop = $(this).scrollTop();

  if (scrollTop >= aboutPos) {
    $header.addClass('is-colored');
  } else {
    $header.removeClass('is-colored');
  }
});


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
// ==============================
// トップへ戻るボタン
// ==============================
const topBtn = document.querySelector('.top-back-btn');
const modal = document.querySelector('.modal');

function updateTopBtn() {
  if (!topBtn) return;

  // 1. 現在のスクロール量を取得
  const scrollY = window.scrollY;

  // 2. 判定基準（FVの高さ ＝ ブラウザの表示領域の高さ）
  const fvHeight = window.innerHeight;

  // 【重要】もしFVに特定のID（#fvなど）があるなら、その高さを正確に測る方法もあります
  // const fvHeight = document.querySelector('#fv').offsetHeight;

  // モーダルが開いている時は無条件で非表示
  if (modal && modal.classList.contains('is-active')) {
    topBtn.classList.remove('show');
    return;
  }

  // スクロール量がFVの高さを超えたら表示
  if (scrollY > fvHeight) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
}

// イベント登録
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