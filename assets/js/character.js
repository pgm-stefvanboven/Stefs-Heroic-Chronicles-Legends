// Haal de ID uit de URL
const params = new URLSearchParams(window.location.search);
const characterId = params.get("id");

const characterDetailContainer = document.getElementById("character-detail");

// Laad de JSON-data
fetch("./assets/js/data/characters.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Failed to load character data");
        }
        return response.json();
    })
    .then((characters) => {
        // Zoek het juiste karakter
        const character = characters.find((char) => char.id == characterId);

        // Toon de character-details
        if (character) {
            characterDetailContainer.innerHTML = `
                <h1>${character.name}</h1>
                <img src="${character.image}" alt="${character.name}">
                <p>${character.description}</p>
                <h3>Abilities:</h3>
                <ul class="abilities">
                    ${character.abilities.map((ability) => `<li>${ability}</li>`).join("")}
                </ul>
                <button class="read-more" onclick="readMore('${characterId}')">Read Full Story</button>
            `;
        } else {
            characterDetailContainer.innerHTML = `
                <h1>Character not found</h1>
                <a href="character-list.html">Back to Characters</a>
            `;
        }
    })
    .catch((error) => {
        console.error("Error loading character data:", error);
        characterDetailContainer.innerHTML = `
            <h1>Failed to load character data</h1>
            <a href="character-list.html">Back to Characters</a>
        `;
    });

// Functie om door te sturen naar een "full story" pagina
function readMore(id) {
    window.location.href = `full-story.html?id=${id}`;
}