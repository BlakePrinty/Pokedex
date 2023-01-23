import nav from "./nav.js";
import pokedex from "./pokedexView.js";
import pokemonView from "./pokemonView.js";

const container = document.querySelector(".container");

function getKantoDex() {
    fetch("https://pokeapi.co/api/v2/pokedex/2/")
    .then(res => res.json())
    .then(pokedexJSON => {
        homePage(pokedexJSON);
    })
}

function homePage(pokedexJSON) {
    container.innerHTML = nav();
    container.innerHTML += pokedex(pokedexJSON);

    const pokemonObjects = container.querySelectorAll(".pokemon-row");
    pokemonObjects.forEach(pokemonObject => {
        let pokemonObjectName = pokemonObject.querySelector(".pokemon-name");
        let pokemonObjectURL = pokemonObject.querySelector(".pokemon-url").value;

        pokemonObjectName.addEventListener("click", () => {
            fetch(pokemonObjectURL)
            .then(res => res.json())
            .then(pokemon => {
                pokemonPage(pokemon);
            })
        })
    })
}

function pokemonPage(pokemon) {
    container.innerHTML = nav();
    container.innerHTML += pokemonView(pokemon);

    const navTitle = container.querySelector(".nav-title");
    navTitle.addEventListener("click", () => {
        window.location.reload();
    });
}

getKantoDex();