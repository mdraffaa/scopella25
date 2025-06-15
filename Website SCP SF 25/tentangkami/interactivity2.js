document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".jiang");
    const closeButton = document.querySelector(".info-nav .close");
    const infoNav = document.getElementById("infoNav");

    if (menuButton && closeButton && infoNav) {
        menuButton.addEventListener("click", () => {
            infoNav.classList.add("active");
            menuButton.classList.add("active");
        });

        closeButton.addEventListener("click", () => {
            infoNav.classList.remove("active");
            menuButton.classList.remove("active");
        });
    }
});

