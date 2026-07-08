const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
