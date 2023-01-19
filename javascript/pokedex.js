export default function pokedex(pokemonList) {
    return `
    <section class="pokedex">
        ${pokemonList.results.map(pokemon => {
            return `
            <div class="pokemon-object">
                <h1 class="pokemon-name">${pokemon.name}</h1>
                <input type="hidden" class="pokemon-url" value="${pokemon.url}">
            </div>
            `
        }).join("")}
    </section>
    `
}