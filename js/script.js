'use strict'; 

// Splide
new Splide( '.splide',{
	autoplay: true,
	interval: 3000,
	speed: 2000,
	type: "loop",
	arrows: false,
	pagination: false,
} ).mount();

// ヘッダー背景色
const header = document.querySelector('.header');
const about = document.querySelector('#about');

header.style.transition = 'background-color 0.4s';

window.addEventListener('scroll', () => {
	const aboutPosition = about.offsetTop; // ← ★ ABOUTセクションの位置を取得
	const scrollY = window.scrollY;
	
	if (window.scrollY > 0) {
		header.style.backgroundColor = 'rgba(77, 150, 0, 0.7)';
		header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
	} else {
		header.style.backgroundColor = 'transparent';
		header.style.boxShadow = 'none';
	}
});

// ==============================
// スクロールアニメーション
// ==============================
// ==============================
// スクロールアニメーション（何度でも再生）
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const fadeUps = document.querySelectorAll(".fade-up");

  const options = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面に入ったら ON
        entry.target.classList.add("on");
      } else {
        // 画面外に出たら OFF
        entry.target.classList.remove("on");
      }
    });
  }, options);

  fadeUps.forEach(el => observer.observe(el));
});
