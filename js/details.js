export async function showGameDetails(gameId) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '91f2373996msh2df5ae81bf76612p196304jsnac607b1fc469',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options);
        const gameDetails = await response.json();

        const detailsContent = document.getElementById('detailsContent');
        detailsContent.innerHTML = `
            <div class="col-12">
                <div class="card text-center">
                    <div class="card-header">
                        <img src="${gameDetails.thumbnail}" alt="${gameDetails.title}" class="w-100">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${gameDetails.title}</h5>
                        <p class="card-text">${gameDetails.description}</p>
                        <p><strong>Genre:</strong> ${gameDetails.genre}</p>
                        <p><strong>Platform:</strong> ${gameDetails.platform}</p>
                    </div>
                </div>
            </div>
        `;

        const detailsSection = document.querySelector('.details');
        detailsSection.classList.remove('d-none');

        const btnClose = document.getElementById('btnClose');
        btnClose.addEventListener('click', () => {
            detailsSection.classList.add('d-none');
        });
    } catch (error) {
        console.error("Error fetching game details:", error.message);
    }
}
