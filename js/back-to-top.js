const topBtn = document.querySelector('.top-back-btn'); // ボタン
const fv = document.querySelector('.mv'); // FVセクション
const modal = document.querySelector('.modal'); // モーダル

// ボタン表示判定関数
function updateTopBtn() {
  const scrollY = window.scrollY;
  const fvHeight = fv.offsetHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;

  if (modal.classList.contains('is-active')) {
    // モーダル開いてる → 非表示
    topBtn.classList.remove('show');
    topBtn.classList.add('hide');
  } else if (scrollY > fvHeight && scrollY < pageHeight - windowHeight) {
    // FV下かつページ下部でない → 表示
    topBtn.classList.add('show');
    topBtn.classList.remove('hide');
  } else {
    // それ以外 → 非表示
    topBtn.classList.remove('show');
    topBtn.classList.add('hide');
  }
}

// スクロール時に判定
window.addEventListener('scroll', updateTopBtn);

// モーダル開閉時に判定
function openModal() {
  modal.classList.add('is-active');
  updateTopBtn(); // ここで即時判定
}

function closeModal() {
  modal.classList.remove('is-active');
  updateTopBtn(); // ここで即時判定
}