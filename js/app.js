const headerEl = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");
const allLinks = document.querySelectorAll("a:link");
///////////////////////////////////////////////////
// Make mobile navigation work
btnNav.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

document.body.addEventListener("keydown", escClose);
///////////////////////////////////////////////////
//  Smooth scrolling animation
allLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    smoothScroll(e, link);
  });
});

// /////////////////////////////////////////////////////
// MENU FADE ANIMATION
headerEl.addEventListener("mouseover", fadeHandler.bind(0.3));
headerEl.addEventListener("mouseout", fadeHandler.bind(1));
