(() => {
  function scroll(anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      let href = this.getAttribute("href").substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector(".header").offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  }
  scroll(document.querySelector("a.first__scroll"));

  document.querySelectorAll("a.nav-link").forEach((link) => {
    scroll(link);
  });

  const burger = document.querySelector(".burger");
  const list = document.querySelector(".header__list");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("active");
    overlay.classList.toggle("active");
    //
    const elementPosition = document.getElementById("story").offsetTop;
    const topOffset = document.querySelector(".header").offsetHeight;
    const offsetPosition = elementPosition - topOffset;
    if (window.pageYOffset < offsetPosition) {
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });

  overlay.addEventListener("click", function (e) {
    e.preventDefault();
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("active");
    overlay.classList.toggle("active");
  });
})();
