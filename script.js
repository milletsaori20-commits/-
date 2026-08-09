const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu) {
  menu.addEventListener("click", () => {
    nav.classList.toggle("activo");
  });
}

document.querySelectorAll("nav a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    nav.classList.remove("activo");
  });
});
