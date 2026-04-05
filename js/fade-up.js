document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll('.fade-up');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40% 0px"
  });

  elements.forEach(el => observer.observe(el));
});