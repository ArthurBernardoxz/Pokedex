const URLbase = 'https://pokeapi.co/api/v2/pokemon/';

var pokeName, pokemon, card;

let input_nome = document.getElementById("barra_pesq");
let botao_encontrar = document.getElementById("botao_encontrar");

botao_encontrar.addEventListener('click', encontrar);

// var's do container
const nome_pokemon = document.getElementById('Nome');
const numero_pokemon = document.getElementById('Numero');
const tipo_pokemon = document.getElementById('Tipo');
const habilidades_pokemon = document.getElementById('Habilidades');
const peso_pokemon = document.getElementById('Peso');
const altura_pokemon = document.getElementById('Altura');
const img_pokemon = document.getElementById('img_pokemon');


function requestPokeInfo(url, name) {  
    tipo_pokemon.innerHTML = '';
    habilidades_pokemon.innerHTML = '';
    
    fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data;
      criarCard();
    })
    .catch(err => console.log(err));
}

function startApp(pokeName) {
    requestPokeInfo(URLbase, pokeName);
}

function encontrar(){
    pokeName = input_nome.value.toLowerCase();
    startApp(pokeName);
}

function criarCard() {
    img_pokemon.src = pokemon.sprites.front_default
    nome_pokemon.innerHTML = pokemon.name;
    numero_pokemon.innerHTML = pokemon.id;
    for(i = 0; i < pokemon.types.length; i++){
        tipo_pokemon.innerHTML = tipo_pokemon.innerHTML + ', ' + pokemon.types[i].type.name;
    }

    for(i = 0; i < pokemon.abilities.length; i++){
        habilidades_pokemon.innerHTML = habilidades_pokemon.innerHTML + ', ' + pokemon.abilities[i].ability.name;
    }
    peso_pokemon.innerHTML = pokemon.weight;
    altura_pokemon.innerHTML = pokemon.height;
}