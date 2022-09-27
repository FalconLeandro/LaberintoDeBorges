const header = document.querySelector(".menu-nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
const body = document.body;


window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll ==0) {
    header.classList.remove(scrollUp);
    return;
  }
   
  if (currentScroll > lastScroll && !header.classList.contains(scrollDown)) {
    // down
    header.classList.remove(scrollUp);
    header.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && header.classList.contains(scrollDown)) {
    // up
    header.classList.remove(scrollDown);
    header.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});