export default function pokemon_stats(pokemon) {
    return `
    <table class="stats-table">
        <tr class="table-title-row">
            <td colspan="6" class="stats-table-title">Stats</td>
        </tr>
        <tr class="labels-row">
            <td class="label">HP</td>
            <td class="label">Attack</td>
            <td class="label">Defense</td>
            <td class="label">Special Attack</td>
            <td class="label">Special Defense</td>
            <td class="label">Speed</td>
        </tr>
        <tr class="stats-row">
            <td class="stat">${pokemon.stats[0].base_stat}</td>
            <td class="stat">${pokemon.stats[1].base_stat}</td>
            <td class="stat">${pokemon.stats[2].base_stat}</td>
            <td class="stat">${pokemon.stats[3].base_stat}</td>
            <td class="stat">${pokemon.stats[4].base_stat}</td>
            <td class="stat">${pokemon.stats[5].base_stat}</td>
        </tr>
        </table>
    `
}