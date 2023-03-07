class mobilenavbar {
    constructor(mobileMenu) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(this.navList);
      this.navLinks = document.querySelector(this.navLinks);
      this.activeClass = "active";

    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log
        ("Hey "));
    }

    Init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobilenavbar = new mobilenavbar(
    ".mobile-Menu",
    ".nav-List",
    ".nav-List li",
);