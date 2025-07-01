var quantidade = document.getElementById('quantidade')
quantidade.addEventListener('keyup', ()=>{
    pegarPokemons(quantidade.value)
})

pegarPokemons(3)

function pegarPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade).then(response => response.json()).then(allpokemon => {
    var pokemons = []

    allpokemon.results.map((val)=>{
        fetch(val.url).then(response => response.json()).then(pokemonSingle => {
            pokemons.push({nome:val.name,images:pokemonSingle.sprites.front_default})

            if(pokemons.length == quantidade){
                //Finalizamos nossas requisições

                var pokemonBoxes = document.querySelector('.pokemon-boxes')
                pokemonBoxes.innerHTML = ''

                //console.log(pokemons)
                pokemons.map((val)=>{
                    pokemonBoxes.innerHTML += `
                    <div class="pokemon-box">
                        <img src="`+val.images+`" alt="pokemon">
                        <p>`+val.nome+`</p>
                    </div>
                    `
                })
            }
        })
    })

    pokemons.map((val)=>{
        console.log(val.nome)
    })
})
}