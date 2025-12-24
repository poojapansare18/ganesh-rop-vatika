async function loadPlants() {
    let req = await fetch("../data/plants.json");
    let plants = await req.json();

    let container = document.getElementById("plant-list");
    container.innerHTML = "";

    plants.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.image}" alt="${p.name_en}">
            <h3>${p.name_en}</h3>
            <p>${p.name_mr}</p>
            <p>${p.category}</p>
            <p class="price">${p.price}</p>
        </div>
        `;
    });
}
