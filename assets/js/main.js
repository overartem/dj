document.addEventListener("DOMContentLoaded", () => {
  (function () {
    const btns = document.querySelectorAll(
      ".photo-lists .card .collapsible-btn"
    );
    const wrapper = ".card-content-wrapper";
    const content = ".card-content";

    btns.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        if (this.attributes["aria-expanded"].value === "false") {
          this.attributes["aria-expanded"].value = true;
          this.innerHTML = "Show Less...";
        } else {
          this.attributes["aria-expanded"].value = false;
          this.innerHTML = "Show More...";
        }
        this.closest(wrapper)
          .querySelector(content)
          .classList.toggle("collapsed-text");
      });
    });
  })();
});
