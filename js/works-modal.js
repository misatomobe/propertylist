// works-modal.js

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const overlay = modal.querySelector('.modal__overlay');

  // クリック対象の画像を取得
  const modalImages = document.querySelectorAll('.js-modal-image');

  modalImages.forEach((img) => {
    img.addEventListener('click', () => {
      modal.classList.add('is-active');
      modalImg.src = img.dataset.modal;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.alt;
    });
  });

  // 閉じる（×ボタン・オーバーレイクリックで）
  [modalClose, overlay].forEach((el) => {
    el.addEventListener('click', () => {
      modal.classList.remove('is-active');
      modalImg.src = '';
      modalCaption.textContent = '';
    });
  });
});