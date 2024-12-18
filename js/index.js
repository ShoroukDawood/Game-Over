import { displayData } from './ui.js';
import { showGameDetails } from '../js/details.js';

async function loadGames(category) {
    const container = document.getElementById("gameContainer");
    container.innerHTML = `<p class="text-center">Loading games...</p>`;
    try {
        const games = await fetchGamesByCategory(category);
        if (games) {
            displayData(games);
        } else {
            container.innerHTML = `<p class="text-center text-danger">No games found for this category.</p>`;
        }
    } catch (error) {
        container.innerHTML = `<p class="text-center text-danger">Failed to load games. Please try again later.</p>`;
        console.error("Error loading games:", error.message);
    }
}

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelectorAll(".navbar-nav .nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
        const category = link.textContent.toLowerCase();
        loadGames(category);
    });
});

const savedCategory = localStorage.getItem("activeCategory") || "mmorpg";
loadGames(savedCategory);
