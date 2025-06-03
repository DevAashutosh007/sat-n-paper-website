// Sticky nav
export const stickyNav = () => {
  window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    const sticky = document.querySelectorAll(".kf-header");
    for (let i = 0; i < sticky.length; i++) {
      const stick = sticky[i];
      if (stick) {
        if (offset > 10) {
          stick.classList.add("fixed");
        } else {
          stick.classList.remove("fixed");
        }
      }
    }
  });
};