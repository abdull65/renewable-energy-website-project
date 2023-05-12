// mobile navigation
const btnNavEl = document.querySelector(".mobile_menu");
const headerEl = document.querySelector("header");
console.log(btnNavEl, headerEl);
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open_nav");
});
// Sticky navigation
const heroSectionEl = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "1px",
  }
);
obs.observe(heroSectionEl);

// making service section text responsive
const readMoreBtns = document.querySelectorAll(".service-typedtext_box");
const readMoreBtnEl = document.querySelector(".read-more");
readMoreBtns.forEach((readMore) => {
  readMore.addEventListener("click", function () {
    readMore.classList.toggle("show-text");
  });
});
