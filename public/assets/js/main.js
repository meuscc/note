window.onload = () => {
  headerFunc();
};
function headerFunc() {
  const headerCtn = document.querySelector("#app-header");
  const toggle = headerCtn.querySelector(".header-toggle");
  const menu = headerCtn.querySelector(".header-right");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    toggle.classList.toggle("open");
    menu.classList.toggle("open");
  });
}
