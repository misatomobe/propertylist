document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const overlay = modal.querySelector('.modal__overlay');

  // aタグ全体をクリック対象にする
  const modalLinks = document.querySelectorAll('.works-item__link');

  let scrollpos = 0;

  modalLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // ← ページ遷移を防ぐ

      const img = link.querySelector('.js-modal-image'); // 内部の画像を取得

      // 固定背景
      scrollPos = window.scrollY;
      document.body.classList.add('is-fixed');
      document.body.style.top = `-${scrollPos}px`;

      modal.classList.add('is-active');
      modalImg.src = img.dataset.modal;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.alt;
    });
  });

  // 閉じる処理
  [modalClose, overlay].forEach((el) => {
    el.addEventListener('click', () => {
      modal.classList.remove('is-active');

      // 背景固定解除
      document.body.classList.remove('is-fixed');
      document.body.style.top = '';
      window.scrollTo(0, scrollPos);

      modalImg.src = '';
      modalCaption.textContent = '';
    });
  });
});
