document.addEventListener("DOMContentLoaded", () => {
  const goTopBtn = document.getElementById("goTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      goTopBtn.style.display = "flex";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
