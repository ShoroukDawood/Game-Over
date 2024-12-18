export async function fetchGamesByCategory(category) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '91f2373996msh2df5ae81bf76612p196304jsnac607b1fc469',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        const games = await response.json();
        return games; 
    } catch (error) {
        console.error("Error fetching games:", error.message);
        return [];
    }
}

export function displayData(games) {
    const container = document.getElementById("gameContainer");
    container.innerHTML = ""; 
    games.forEach(game => {
        const card = `
            <div class="card text-center col-md-3" data-id="${game.id}">
                <div class="card-header">
                    <div class="imageCard">
                        <img src="${game.thumbnail}" alt="${game.title}" class="w-100">
                    </div>
                </div>
                <div class="card-body">
                    <div class="all">
                        <h6 class="title">${game.title}</h6>
                        <span class="free badge">Free</span>
                    </div>
                    <p class="card-text">${game.short_description}</p>
                </div>
                <div class="card-footer text-body-secondary">
                    <span class="badge badge-color">${game.genre}</span>
                    <span class="badge badge-color">${game.platform}</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });

    const cards = container.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const gameId = card.getAttribute('data-id');
            showGameDetails(gameId); 
        });
    });
}
