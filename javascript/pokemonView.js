export default function pokemonView(pokemon) {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function hiddenAbility(bool) {
        if (bool == true) {
            return "Hidden"
        } else {
            return "Normal"
        }
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

        <table class="abilities-table">
            <tr class="abilities-title-row">
                <td colspan="2" class="abilities-title">Abilities</td>
            </tr>
            <tr class="abilities-labels-row">
                <td class="ability-type-label">Ability Type</td>
                <td class="ability-name-label">Ability Name</td>
            </tr>
                ${pokemon.abilities.map(ability => {
                    return `
                    <tr class="abilities-row">
                        <td class="ability-type">${hiddenAbility(ability.is_hidden)}</td>
                        <td class="ability-name">${capitalize(ability.ability.name)}</td>
                    </tr>
                    `
                }).join("")}
        </table>

        <table class="moves-table">
            <tr class="moves-title-row">
                <td colspan="3" class="moves-title">Moves</td>
            </tr>
            <tr class="labels">
                <td class="level-learned">Level</td>
                <td class="move-learned">Move</td>
                <td class="method-learned">Move Method</td>
            </tr>

            ${pokemon.moves.map(move => {
                return `
                <tr class="moves-rows">
                    <td class="move-level">${move.version_group_details[0].level_learned_at}</td>
                    <td class="move-name">${capitalize(move.move.name)}</td>
                    <td class="move-method">${capitalize(move.version_group_details[0].move_learn_method.name)}</td>
                </tr>
                `
            }).join("")}
        </table>

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

        <table class="game-indices">
            <tr class="game-indices-title-row">
                <td class="game-title">Games</td>
            </tr>

            ${pokemon.game_indices.map(version => {
                return `
                <tr class="game-name-row">
                    <td class="game-name">${capitalize(version.version.name)}</td>
                </tr>
                `
            }).join("")}
        </table>

    </section>
    `
}