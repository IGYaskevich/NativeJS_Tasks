let BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const pokemonAPI = {
    getPokemonList: async (url) => {
        try {

            const request = await fetch(url)
            const {results} = await request.json()
            console.log(results)

        } catch (error) {
            console.log('Not found', error)
        }
    },
    getFullDescriptionPokemon: async (pokemonName) => {
        try {

            const request = await fetch(`${BASE_URL}${pokemonName}`)
            const response = await request.json()
            console.log('Name:', pokemonName, response)

        } catch (error) {
            console.log(`a pokemon named <${pokemonName}> was not found`)
        }
    },
    getListPokemonDescription: async () => {
        try {

            const request = await fetch(BASE_URL)
            const {results} = await request.json()

            const listPromises = results.map(({url}) => fetch(url).then(response => response.json()))
            const finallyResult = await Promise.all(listPromises)

            console.log(finallyResult)
            return finallyResult


        } catch (error) {
            console.log('Not found', error)
        }
    },
}


// console.log(pokemonAPI.getPokemonList(BASE_URL))
// pokemonAPI.getFullDescriptionPokemon("bulbasaur")
// pokemonAPI.getListPokemonDescription()
