/* =============================================================
   GANESH ROP VATIKA — FILTERING ENGINE (G3)
   Works for English & Marathi pages
   Filters instantly based on category
============================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const plantCards = document.querySelectorAll(".plant-card");

    // Add click event to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category;

            // Remove active class from all
            filterButtons.forEach(btn => btn.classList.remove("active"));

            // Add active to clicked
            button.classList.add("active");

            // Filter logic
            filterPlants(category);
        });
    });

});


function filterPlants(category) {
    const cards = document.querySelectorAll(".plant-card");

    cards.forEach(card => {
        const cardCategory = card.dataset.category;

        // Show all plants
        if (category === "All") {
            card.style.display = "block";

            setTimeout(() => {
                card.classList.add("visible");
            }, 10);

        } else {
            // Show only matched
            if (cardCategory === category) {
                card.style.display = "block";

                setTimeout(() => {
                    card.classList.add("visible");
                }, 10);

            } else {
                card.style.display = "none";
                card.classList.remove("visible");
            }
        }
    });
}
