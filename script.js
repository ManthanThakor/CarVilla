function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("active");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.getElementById("backToTopBtn").addEventListener("click", scrollToTop);
