document.addEventListener('DOMContentLoaded', () => {
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

  //閉じる処理
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
});