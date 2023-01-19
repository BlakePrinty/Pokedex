import navigation from "./navigation.js";
import pokedex from "./pokedex.js";
import pokemon_stats from "./pokemon_stats.js";
import pokemon_name from "./pokemon_name.js";




import footer from "./footer.js";

const container = document.querySelector(".container");

function getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(res => res.json())
    .then(pokemonList => {
        showDex(pokemonList);
    })
}

function showDex(pokemonList) {
    console.log(pokemonList);
    container.innerHTML = navigation();
    container.innerHTML += pokedex(pokemonList);
    container.innerHTML += footer();

    const pokemonObjects = container.querySelectorAll(".pokemon-object");
    pokemonObjects.forEach(pokemonObject => {
        const pokemonObjectName = pokemonObject.querySelector(".pokemon-name");
        let pokemonObjectURL = pokemonObject.querySelector(".pokemon-url");
 
        pokemonObjectName.addEventListener("click", () => {
            console.log(pokemonObjectName.innerHTML);
            console.log(pokemonObjectURL.value);

            fetch(pokemonObjectURL.value)
            .then(res => res.json())
            .then(pokemonObject => {
                makePokemonView(pokemonObject);
            })
        })
    })
}

function makePokemonView(pokemonObject) {
    container.innerHTML = navigation();
    container.innerHTML += pokemon_name(pokemonObject);
    container.innerHTML += pokemon_stats(pokemonObject);
    container.innerHTML += footer();
}

getPokemon();