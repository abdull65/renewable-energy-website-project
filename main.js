// mobile navigation
const btnNavEl = document.querySelector(".mobile_menu");
const headerEl = document.querySelector("header");
console.log(btnNavEl, headerEl);
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("open_nav");
});
// Sticky navigation
const indexSectionElEl = document.querySelector("#hero_section");
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
    rootMargin: "-80px",
  }
);
obs.observe(indexSectionElEl);
