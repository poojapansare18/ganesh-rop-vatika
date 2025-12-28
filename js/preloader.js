/* =============================================================
   PRELOADER LOGIC — AUTO HIDE AFTER PAGE LOAD
============================================================= */

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.style.transition = "opacity 0.7s ease";

        setTimeout(() => {
            preloader.style.display = "none";
        }, 700);

    }, 400);  // slight delay for smooth effect
});
