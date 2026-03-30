document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const modalClose = document.getElementById('modal-close');
  const overlay = modal.querySelector('.modal__overlay');
  const modalLinks = document.querySelectorAll('.works-item__link');

  modalLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const img = link.querySelector('.js-modal-image');

      document.documentElement.classList.add('is-fixed');
      document.body.classList.add('is-fixed');

      modalImg.src = img.dataset.modal;
      modalImg.alt = img.alt;
      modalCaption.textContent = img.alt;

      modal.classList.add('is-active');
    });
  });

  function closeModal() {
    modal.classList.remove('is-active');

    document.documentElement.classList.remove('is-fixed');
    document.body.classList.remove('is-fixed');

    modalImg.src = '';
    modalCaption.textContent = '';
  }

  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
});
