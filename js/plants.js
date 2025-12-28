/* =============================================================
   GANESH ROP VATIKA — PLANT RENDERER (G4)
   Loads plants.json and displays premium cards
   Works for English & Marathi pages
============================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const plantGrid = document.querySelector(".plant-grid");
    const language = document.body.dataset.lang; 
    // "en" or "mr" → set this in HTML <body data-lang="en">

    fetch("../data/plants.json")
        .then(res => res.json())
        .then(data => renderPlants(data));
});


function renderPlants(plants) {

    const plantGrid = document.querySelector(".plant-grid");
    const language = document.body.dataset.lang;

    plants.forEach(plant => {

        // Language Support
        let plantName = language === "mr" ? plant.name_mr : plant.name_en;

        // Badge HTML
        let badgeHTML = "";
        if (plant.badge === "Best Seller") {
            badgeHTML = `<div class="badge">Best Seller</div>`;
        }
        if (plant.badge === "New Arrival") {
            badgeHTML = `<div class="badge new">New Arrival</div>`;
        }

        // WhatsApp message
        const whatsappText = encodeURIComponent(
            `Hello Ganesh Rop Vatika, I want more details about ${plant.name_en}`
        );

        // Create card
        const card = document.createElement("div");
        card.classList.add("plant-card", "fade-up");
        card.setAttribute("data-category", plant.category);

        card.innerHTML = `
            ${badgeHTML}

            <img src="${plant.image}" alt="${plantName}">

            <h3 class="plant-name">${plantName}</h3>

            <div class="plant-price">${plant.price}</div>

            <div class="category-chip">${plant.category}</div>

            <a href="https://wa.me/919822143644?text=${whatsappText}"
               target="_blank" class="enquiry-btn">
               Enquiry
            </a>
        `;

        plantGrid.appendChild(card);
    });

    triggerScrollAnimation();
}


/* =============================================================
   SCROLL ANIMATION TRIGGER
============================================================= */

function triggerScrollAnimation() {
    const items = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => observer.observe(item));
}
