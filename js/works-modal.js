document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const overlay = modal.querySelector('.modal__overlay');
  const modalLinks = document.querySelectorAll('.works-item__link');

  let scrollPos = 0;

  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = link.querySelector('.js-modal-image');

      // 1. スクロールバーの幅を計算（画面幅 - bodyの幅）
      const scrollbarWidth = window.innerWidth - document.body.clientWidth;

      // 2. 現在の位置を記憶
      scrollPos = window.scrollY;

      // 3. bodyを固定し、ガタつき防止のpaddingを入れる
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('is-fixed');
      document.body.style.top = `-${scrollPos}px`;

      modalImg.src = img.dataset.modal;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.alt;
      modal.classList.add('is-active');
    });
  });

  function closeModal() {
    modal.classList.remove('is-active');

    // 4. 固定を解除し、paddingも戻す
    document.body.classList.remove('is-fixed');
    document.body.style.top = '';
    document.body.style.paddingRight = ''; // ここでリセット

    // 5. 記憶していた位置まで一気に戻す
    window.scrollTo(0, scrollPos);

    modalImg.src = '';
    modalCaption.textContent = '';
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});