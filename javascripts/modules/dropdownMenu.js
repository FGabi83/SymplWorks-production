function dropdownMenu() {
  const navMenu = document.querySelector(".js-nav--menu");
  const navWrapper = document.querySelector(".js-nav--wrapper");
  const navLinks = document.querySelectorAll(".js-nav--item");
  
  navMenu.addEventListener("click", () => { 
    navWrapper.classList.toggle("js-is-open");
  }); 

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navWrapper.classList.remove("js-is-open");
    });
  });
}

export default dropdownMenu;
