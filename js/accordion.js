document.querySelectorAll('.js-accordion-title').forEach(title => {
  title.addEventListener('click', () => {
    const content = title.nextElementSibling;
    const isOpen = content.classList.contains('is-open');

    // 全て閉じる（複数あれば）
    document.querySelectorAll('.accordion__content').forEach(c => c.classList.remove('is-open'));
    document.querySelectorAll('.js-accordion-title').forEach(t => t.classList.remove('is-open'));

    // クリックしたものだけ開く
    if (!isOpen) {
      content.classList.add('is-open');
      title.classList.add('is-open');
    }
  });
});