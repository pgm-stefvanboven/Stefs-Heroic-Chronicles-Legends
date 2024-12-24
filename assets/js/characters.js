async function loadCharacters() {
    try {
        const response = await fetch('./assets/js/data/characters.json');
        const characters = await response.json();

        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Maak de gallery leeg

        characters.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('character-card');
            card.innerHTML = `
                <a href="character-detail.html?id=${character.id}" class="card-link">
                    <img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>
                </a>
            `;
            gallery.appendChild(card);
        });
    } catch (error) {
        console.error('Fout bij het laden van characters:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadCharacters);