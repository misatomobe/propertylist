const topBtn = document.querySelector('.top-back-btn');
const footer = document.querySelector('footer');
const mv = document.querySelector('.mv');
const modal = document.querySelector('.modal');

function updateTopBtn() {
  const scrollY = window.scrollY;
  const fvHeight = window.innerHeight;
  const footerTop = footer.offsetTop;

  if (modal.classList.contains('is-active')) {
    topBtn.classList.remove('show');
    return;
  }

  // FVより下 ＆ footerより上
  if (scrollY > fvHeight && scrollY < footerTop -50) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
}

window.addEventListener('scroll', updateTopBtn);
window.addEventListener('load', updateTopBtn);