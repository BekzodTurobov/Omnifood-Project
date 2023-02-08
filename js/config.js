//////////////////////////////////////////
//  SET CURRENT YEAR
//////////////////////////////////////////
const yearEl = document.getElementById("current-year");

const date = new Date();
yearEl.textContent = date.getFullYear();

///////////////////////////////////////////////////
//  Smooth scrolling animation

function smoothScroll(e, link) {
  e.preventDefault();
  const href = link.getAttribute("href");
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // Scroll to other links
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }

  if (href !== "#" && !href.startsWith("#")) {
    window.open(e.target.href);
  }

  // Close mobile navigation
  if (link.classList.contains("main-nav-link")) {
    headerEl.classList.toggle("nav-open");
  }
}

function escClose(e) {
  if (e.key === "Escape") {
    headerEl.classList.remove("nav-open");
  }
}

///////////////////////////////////////////////////
//  Sticky navigation bar

const sectionHeroEl = document.querySelector(".section-hero");
const headerHeight = document
  .querySelector("header")
  .getBoundingClientRect().height;

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`,
  }
);
observer.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  // console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// /////////////////////////////////////////////////////
// MENU FADE ANIMATION
const fadeHandler = function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link.closest(".header").querySelectorAll(".main-nav-link");
    const logo = link.closest(".header").querySelector(".logo");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
