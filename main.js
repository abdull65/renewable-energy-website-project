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

// testimonial carousel
const mainCarouselBox = document.querySelector(".testimonial-carousal");
const prevCarouselBtn = document.querySelector(".fa-angle-left");
const nextCarouselBtn = document.querySelector(".fa-angle-right");
const currentSlideBox = document.querySelector(".carousel_slide_indicator_box");
let sectionIndex = 0;
prevCarouselBtn.addEventListener("click", () => {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  mainCarouselBox.style.transform = `translate(${sectionIndex * -23.8}%)`;
  document
    .querySelector(".carousel_slide_indicator_box .current_slide")
    .classList.remove("current_slide");
  currentSlideBox.children[sectionIndex].classList.add("current_slide");
});
nextCarouselBtn.addEventListener("click", () => {
  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  mainCarouselBox.style.transform = `translate(${sectionIndex * -23.8}%)`;
  document
    .querySelector(".carousel_slide_indicator_box .current_slide")
    .classList.remove("current_slide");
  currentSlideBox.children[sectionIndex].classList.add("current_slide");
});
document.querySelectorAll(".dot_indicator").forEach((currentSlide, ind) => {
  currentSlide.addEventListener("click", () => {
    sectionIndex = ind;
    mainCarouselBox.style.transform = `translate(${sectionIndex * -23.8}%)`;
    document
      .querySelector(".carousel_slide_indicator_box .current_slide")
      .classList.remove("current_slide");
    currentSlideBox.children[sectionIndex].classList.add("current_slide");
  });
});
