document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".js-accordion-title");

  titles.forEach(title => {
    title.addEventListener("click", function () {
      const content = this.nextElementSibling;

      // 開閉
      content.classList.toggle("is-open");
    });
  });
});