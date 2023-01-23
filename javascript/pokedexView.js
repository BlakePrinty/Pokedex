export default function pokedex(pokedex) {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return `
    <section class="pokedex">
        <h1 class="pokedex-region">${capitalize(pokedex.name)}</h1>

        <table class="pokedex-table">
            <tr class="pokedex-title-row">
                <td colspan="2" class="pokedex-title">${capitalize(pokedex.name)} Pokédex</td>
            </tr>
            ${pokedex.pokemon_entries.map(pokemon => {
                return `
                <tr class="pokemon-row">
                    <td class="entry-num">${pokemon.entry_number}</td>
                    <td class="pokemon-name">${capitalize(pokemon.pokemon_species.name)}</td>
                    <input type="hidden" class="pokemon-url" value="https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_species.name}/">
                </tr>
                `
            }).join("")}
        </table>

    </section>`
}