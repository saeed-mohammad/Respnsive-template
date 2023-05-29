const navLink = document.querySelector(".navLink");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", () => {
  navLink.style.display = "flex";
  menu.style.display = "none";
  close.style.display = "inline-block";
});
close.addEventListener("click", () => {
  navLink.style.display = "none";
  menu.style.display = "inline-block";
  close.style.display = "none";
});
// scroll animation

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrollToggle");
  } else {
    header.classList.remove("scrollToggle");
  }
});

//======= frequently ask question =============
const faq = document.querySelectorAll(".faq");

faq.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    // change icon
    const icon = faq.querySelector(".faq__icon i");

    if (icon.className == "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});
