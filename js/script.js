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

