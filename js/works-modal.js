const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalOverlay = document.querySelector('.modal__overlay');
const modalImages = document.querySelectorAll('.js-modal-image');

// 画像クリックでモーダルを開く
modalImages.forEach(img => {
  img.addEventListener('click', () => {
    const imgSrc = img.getAttribute('data-modal');
    modalImg.src = imgSrc;
    modal.classList.add('is-active');
  });
});

// 閉じるボタン or 背景クリックで閉じる
[modalClose, modalOverlay].forEach(el => {
  el.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });
});