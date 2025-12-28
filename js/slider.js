/* ============================================================
   HERO SLIDER — GANESH ROP VATIKA
   Auto-play + Manual navigation
============================================================ */

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlideFunc() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

/* Auto-play slider every 4 seconds */
let autoSlide = setInterval(nextSlide, 4000);

/* When clicking arrow buttons */
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
});

prevBtn.addEventListener("click", () => {
    prevSlideFunc();
    resetAuto();
});

/* Reset autoplay when user interacts */
function resetAuto() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
}

/* Initialize */
showSlide(currentSlide);
