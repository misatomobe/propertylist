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
$(window).on('scroll load resize', function () {
  const $header = $('.header');
  const $fv = $('.fv');

  if (!$header.length || !$fv.length) return;

  // ① FVの高さを取得
  const fvHeight = $fv.outerHeight();
  
  // ② 画面の上端の位置（スクロール量）を取得
  const scrollTop = $(this).scrollTop();

  // 画面の上端が、FVを完全に通り過ぎたら（FVが画面から消えたら）背景色を変更
  if (scrollTop > fvHeight) {
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
const topBtn = document.querySelector('.top-back-btn');
const footer = document.querySelector('footer');
const fv = document.querySelector('.fv');
const modal = document.querySelector('.modal');

function updateTopBtn() {
  // 必要な要素が揃っていない場合は処理を抜ける
  if (!topBtn || !fv) return;

  // モーダル表示中は最優先で非表示にする
  if (modal && modal.classList.contains('is-active')) {
    topBtn.classList.remove('show');
    return;
  }

  // ① FVの高さを取得
  const fvHeight = fv.offsetHeight;

  // ② スクロール量が①（FVの高さ）を超えたら表示
  if (window.scrollY > fvHeight) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
}

// イベントリスナーの登録
window.addEventListener('scroll', updateTopBtn);
window.addEventListener('load', updateTopBtn);
window.addEventListener('resize', updateTopBtn);

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
    rootMargin: "0px 0px -5% 0px"
  });

  elements.forEach(el => observer.observe(el));

});