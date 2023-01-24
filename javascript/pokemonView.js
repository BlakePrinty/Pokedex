export default function pokemonView(pokemon) {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function hiddenAbility(bool) {
        return (bool) ? "Hidden" : "Normal";
    }

    function baseStatTotal() {
        return pokemon.stats[0].base_stat + pokemon.stats[1].base_stat + pokemon.stats[2].base_stat + pokemon.stats[3].base_stat + pokemon.stats[4].base_stat + pokemon.stats[5].base_stat;
    }

    return `
    <section class="pokemon-info">

            <div class="poke-info">
                <svg class="back-arrow" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1zm-1.5-7.506-4.751 4.507 4.751 4.507v-3.008h10.022v-2.998h-10.022z" fill-rule="nonzero"/></svg>
                <h1 class="poke-num">#${pokemon.id}</h1>
                <h1 class="poke-name">${capitalize(pokemon.name)}</h1>
                <svg class="next-arrow" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1zm1.5-4.498v-3.008l4.751 4.507-4.751 4.507v-3.008h-10.022v-2.998z" fill-rule="nonzero"/></svg>
            </div>

            <table class="pokemon-view-table">
                <tr class="table-title-row">
                    <td colspan="2" class="table-title">
                        <h1 class="title">Picture</h1>
                    </td>
                </tr>
                <tr class="table-content-row">
                    <td class="table-content left">
                        <img class="sprite"
                            src="${pokemon.sprites.other.home.front_default}"
                            alt="">
                    </td>
                    <td class="table-content right">
                        <img class="sprite"
                            src="${pokemon.sprites.other.home.front_shiny}"
                            alt="">
                    </td>
                </tr>
            </table>

            <table class="pokemon-view-table">
                <tr class="table-title-row">
                    <td class="table-title">
                        <h1 class="title">Name</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Type</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Abilities</h1>
                    </td>
                </tr>
                <tr class="table-content-row">
                    <td class="table-content">
                        <h2 class="content">${capitalize(pokemon.name)}</h2>
                    </td>
                    <td class="table-content types">
                    ${pokemon.types.map(type => {
                        return `
                        <h1 class="content type ${type.type.name}">${capitalize(type.type.name)}</h1>
                        `
                    }).join("")}
                    </td>
                    <td class="table-content">
                    ${pokemon.abilities.map(ability => {
                        return `
                        <h2 class="content">${capitalize(ability.ability.name)}</h2>
                        `
                    }).join("")}
                    </td>
                </tr>
            </table>

            <table class="pokemon-view-table">
                <tr class="table-title-row">
                    <td class="table-title">
                        <h1 class="title">Height</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Weight</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Base Experience</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Base Stat Total</h1>
                    </td>
                </tr>
                <tr class="table-content-row">
                    <td class="table-content">
                        <h2 class="content">${(pokemon.height)/10}m</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${(pokemon.weight)/10}kg</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.base_experience}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${baseStatTotal()}</h2>
                    </td>
                </tr>
            </table>

            <table class="pokemon-view-table">
                <tr class="table-title-row">
                    <td colspan="6" class="table-title">
                        <h1 class="title">Stats</h1>
                    </td>
                </tr>
                <tr class="table-title-row">
                    <td class="table-title">
                        <h1 class="title">HP</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Attack</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Defense</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Special Attack</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Special Defense</h1>
                    </td>
                    <td class="table-title">
                        <h1 class="title">Speed</h1>
                    </td>
                </tr>
                <tr class="table-content-row">
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[0].base_stat}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[1].base_stat}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[2].base_stat}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[3].base_stat}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[4].base_stat}</h2>
                    </td>
                    <td class="table-content">
                        <h2 class="content">${pokemon.stats[5].base_stat}</h2>
                    </td>
                </tr>
            </table>

        </section>
    `
}