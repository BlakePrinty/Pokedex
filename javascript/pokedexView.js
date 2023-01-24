export default function pokedex(pokedex) {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return `
    <section class="pokedex-content">
        
        <table class="pokedex-table">
            <tr class="pokedex-title-row">
                <td colspan="2" class="pokedex-title">
                    <h1 class="dex-title">${capitalize(pokedex.name)} Pokédex</h1>
                </td>
            </tr>
            <tr class="pokedex-title-row">
                <td class="pokedex-title">
                    <h1 class="dex-title left">No.</h1>
                </td>
                <td class="pokedex-title">
                    <h1 class="dex-title right">Name</h1>
                </td>
            </tr>
            ${pokedex.pokemon_entries.map(pokemon => {
                return `
                <tr class="pokemon-row">
                    <td class="entry-num-content">
                        <h1 class="entry-num">#${pokemon.entry_number}</h1>
                    </td>
                    <td class="pokemon-name-content">
                        <h1 class="pokemon-name">${capitalize(pokemon.pokemon_species.name)}</h1>
                    </td>
                    
                    <input type="hidden" class="pokemon-url" value="https://pokeapi.co/api/v2/pokemon/${pokemon.pokemon_species.name}/">
                </tr>
                `
            }).join("")}
        </table>

    </section>
    
    
    
    `
}