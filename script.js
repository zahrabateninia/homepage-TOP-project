// Menu toggle
const menu = document.querySelector("#menu-bars");
const header = document.querySelector("header");

menu?.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  header.classList.toggle("active");
});

// Close menu on scroll
window.addEventListener("scroll", () => {
  menu?.classList.remove("fa-times");
  header.classList.remove("active");
});

// Detect touch support
const isTouchDevice =
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

// Custom cursors (mouse-only)
const cursor1 = document.querySelector(".cursor-1");
const cursor2 = document.querySelector(".cursor-2");

if (!isTouchDevice && cursor1 && cursor2) {
  // Track cursor movement
  window.addEventListener("mousemove", (e) => {
    const { pageX, pageY } = e;
    cursor1.style.top = `${pageY}px`;
    cursor1.style.left = `${pageX}px`;
    cursor2.style.top = `${pageY}px`;
    cursor2.style.left = `${pageX}px`;
  });

  // Hover effect on links
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor1.classList.add("active");
      cursor2.classList.add("active");
    });

    link.addEventListener("mouseleave", () => {
      cursor1.classList.remove("active");
      cursor2.classList.remove("active");
    });
  });
}
