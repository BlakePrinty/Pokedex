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

    const backButton = container.querySelector(".back-arrow");
    const nextButton = container.querySelector(".next-arrow");
    const pokemonID = container.querySelector(".poke-num");
    backButton.addEventListener("click", () => {
        if (pokemonID.innerHTML == "#1") {
            window.location.reload();
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${(pokemon.id) - 1}/`)
            .then(res => res.json())
            .then(prevPokemon => {
                pokemonPage(prevPokemon);
            })
        }
    })

    nextButton.addEventListener("click", () => {
        if (pokemonID.innerHTML == "#151") {
            window.location.reload();
        } else {
            fetch(`https://pokeapi.co/api/v2/pokemon/${(pokemon.id) + 1}/`)
            .then(res => res.json())
            .then(nextPokemon => {
                pokemonPage(nextPokemon);
            })
        }
    })
}

getKantoDex();