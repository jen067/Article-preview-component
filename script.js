let links = document.querySelector(".links");
let btn = document.querySelector(".share");
let shareBtn = document.querySelector(".sharebtn");
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  shareBtn.classList.toggle("active");
  links.classList.toggle("appear");
  if (btn.classList.contains("active")) {
    btn.style.top = ".5rem";
  } else {
    btn.style.top = "0";
  }
});
