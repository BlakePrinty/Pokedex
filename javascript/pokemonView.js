export default function pokemonView(pokemon) {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return `
    <section class="pokemon-info">

        <h1 class="pokemon-info-name">${capitalize(pokemon.name)}</h1>

        <div class="pokemon-sprites">
            <img class="sprite" src="${pokemon.sprites.other.home.front_default}" alt="Normal Sprite">
            <img class="sprite" src="${pokemon.sprites.other.home.front_shiny}" alt="Shiny Sprite">
        </div>

        <div class="pokemon-type">
            ${pokemon.types.map(type => {
                return `
                <h1 class="type ${type.type.name}">${capitalize(type.type.name)}</h1>
                `
            }).join("")}
        </div>

        <table class="stats-table">
            <tr class="stats-title-row">
                <td colspan="6" class="stats-title">Stats</td>
            </tr>
            <tr class="stats-labels-row">
                <td class="stat-label">HP</td>
                <td class="stat-label">Attack</td>
                <td class="stat-label">Defense</td>
                <td class="stat-label">Special Attack</td>
                <td class="stat-label">Special Defense</td>
                <td class="stat-label">Speed</td>
            </tr>
            <tr class="stats-row">
                <td class="stat-row">${pokemon.stats[0].base_stat}</td>
                <td class="stat-row">${pokemon.stats[1].base_stat}</td>
                <td class="stat-row">${pokemon.stats[2].base_stat}</td>
                <td class="stat-row">${pokemon.stats[3].base_stat}</td>
                <td class="stat-row">${pokemon.stats[4].base_stat}</td>
                <td class="stat-row">${pokemon.stats[5].base_stat}</td>
            </tr>
        </table>

    </section>
    `
}