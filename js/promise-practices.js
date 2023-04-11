"use strict";

fetch('https://pokeapi.co/api/v2/pokemon/lucario')
.then(resp => (resp.json()))
.then(data => {
    console.log(data)
    // data.reduce((pokemon, data) => {
    //     pokemon.name = data.name
    // })
    let pokemonObj = {};
    pokemonObj.name = data.name;
    pokemonObj.abilities = data.abilities;
    pokemonObj.height = data.height;
    pokemonObj.stats = data.stats;
    pokemonObj.base_experience = data.base_experience;
    pokemonObj.weight = data.weight;
    pokemonObj.types = data.types;
    pokemonObj.moves = data.moves;
    console.log(pokemonObj)

    let body = document.getElementsByTagName('body')[0]
    body.innerHTML =
        '<div class="box">' +
        `<h3>${pokemonObj.name}</h3>` +
        `${pokemonObj.height}<br>` +
        `${pokemonObj.base_experience}`
    body.innerHTML += '<ul>'
        pokemonObj.types.forEach( type => {
            body.innerHTML += `<li>${type.type.name}</li>`
        })
    body.innerHTML += '</ul><ul>'
        pokemonObj.abilities.forEach( ability => {
            body.innerHTML += `<li>${ability.ability.name}</li>`
        })
    body.innerHTML += '</ul><ul>'
        pokemonObj.stats.forEach( stat => {
            body.innerHTML += `<li>${stat.stat.name} ${stat.base_stat}</li>`
        })
    body.innerHTML += '</ul><ul>'
        pokemonObj.moves.forEach( move => {
            body.innerHTML += `<li>${move.move.name}</li>`
        })
    body.innerHTML += '</ul>'
})