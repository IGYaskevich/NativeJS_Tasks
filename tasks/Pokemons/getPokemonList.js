let initialURL = 'https://pokeapi.co/api/v2/pokemon/'


const pokemonAPI = {
    getPokemonList: async (url) => {
        try {
            const response = await fetch(url)
            return await response.json()
        } catch (error) {
            console.log('Not found', error)
        }
    },
    getFullDescriptionPokemon: async (pokemonName) => {
        try {
            const response = await (await fetch(`${initialURL}${pokemonName}`)).json()
            console.log('Name:', pokemonName, response)
        } catch (error) {
            console.log(`a pokemon named <${pokemonName}> was not found`)
        }
    },
    getListPokemonDescription: async () => {
        const {getPokemonList} = pokemonAPI
        const response = await getPokemonList(initialURL)
        const listPromises = await response.results.map(pokemon => {
            return getPokemonList(pokemon.url)
        })
        const fullDescription = await Promise.all(listPromises)
        console.log(fullDescription)
        return fullDescription
    }
}

pokemonAPI.getPokemonList(initialURL)
pokemonAPI.getFullDescriptionPokemon("bulbasaur")
pokemonAPI.getListPokemonDescription()
