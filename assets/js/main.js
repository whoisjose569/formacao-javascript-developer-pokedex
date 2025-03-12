function convertpokemonToLi(pokemon) {
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                        alt=${pokemon.name}>
                </div>
            </li>`
}

const pokemonLi = document.getElementById("pokemonList")

pokeApi.getPokemons()
    .then((pokemons = []) => {
        /* Pode ser assim
        const newList = pokemons.map((pokemon) => {
            return convertpokemonToLi(pokemon)
        })
        assim
        const newList = pokemons.map((pokemon) => convertpokemonToLi(pokemon))
        ou direto como esta abaixo*/
        pokemonLi.innerHTML += pokemons.map(convertpokemonToLi).join('')

    })
