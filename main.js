document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const darkBtn = document.querySelector(".darkBtn");
  const logoImg = document.querySelector(".logoImg");

  const hamburgerBtn = document.querySelector(".hamburger");
  const ul = document.querySelector("ul");

  let darkMode = localStorage.getItem("darkmode");

  const mode = () => {
    if (darkMode == "tun") {
      body.classList.add("dark");
      logoImg.setAttribute("src", "imgs/darkLogo.png");
    } else {
      body.classList.remove("dark");
      logoImg.setAttribute("src", "imgs/logo.png");
    }
  };
  mode();

  darkBtn.addEventListener("click", () => {
    if (darkMode == "kun") {
      darkMode = "tun";
    } else {
      darkMode = "kun";
    }
    mode();
    localStorage.setItem("darkmode", darkMode);
  });

  hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    ul.classList.toggle("active");
  });

  ul.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  window.addEventListener("click", () => {
    ul.classList.remove("active");
  });
});
