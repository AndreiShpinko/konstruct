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

  const burger = document.querySelector(".burger");
  const list = document.querySelector(".header__list");
  const body = document.querySelector("body");
  const overlay = document.querySelector(".overlay");

  function toggleClasses() {
    burger.classList.toggle("active");
    list.classList.toggle("active");
    body.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  scroll(document.querySelector("a.first__scroll"));

  document.querySelectorAll("a.nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      scroll(link);
      toggleClasses();
    });
  });

  burger.addEventListener("click", function (e) {
    e.preventDefault();
    toggleClasses();
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
    toggleClasses();
  });
})();
