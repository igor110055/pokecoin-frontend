const Pokedex = require("pokeapi-js-wrapper");
const options = {
    versionPath: '/api/v2/',
    cacheLimit: 100 * 1000,
    timeout: 5 * 1000
}
const interval = {
    offset: 0,
    limit: 20,
}
const Pokeapi = new Pokedex.Pokedex(options)

export const getPokemonsByName = async (payload) => {
    const { pokemonName } = payload;
    try {
        const pokemonByNameResponse = await Pokeapi.getPokemonByName(pokemonName);
        const pokemonData = {
            name: pokemonByNameResponse['name'],
            imgUrl: pokemonByNameResponse['sprites']['other']['official-artwork']['front_default'] || pokemonByNameResponse['sprites']['front_default'],
            baseExperience: pokemonByNameResponse['base_experience'],
            type: pokemonByNameResponse['types'][0]['type']['name'] || '',
            id: pokemonByNameResponse['id']
        }
        return pokemonData
    } catch (error) {
        throw error;
    }
};

export const getAllPokemons = async () => {
    try {
        const listResponse = await Pokeapi.getPokemonsList(interval);
        const pokemonData = await handleGetPokemonByUrl(listResponse);
        const returnData = { next: listResponse.next, prev: listResponse.previous, pokemonData };

        return returnData;

    } catch (error) {
        throw error;
    }
};

export const getPokemonsByPage = async (page) => {
    try {
        const listResponse = await Pokeapi.resource(page);
        const pokemonData = await handleGetPokemonByUrl(listResponse);
        const returnData = { next: listResponse.next, prev: listResponse.previous, pokemonData }
        return returnData;
    } catch (error) {
        throw error;
    }
};

const handleGetPokemonByUrl = async (pokemonList) => {
    try {
        const pokemonData = await Promise.all(pokemonList.results.map(async (pokemon) => {
            const resourceResponse = await Pokeapi.resource(pokemon.url);
            const data = {
                name: resourceResponse['name'],
                imgUrl: resourceResponse['sprites']['other']['official-artwork']['front_default'] || resourceResponse['sprites']['front_default'],
                baseExperience: resourceResponse['base_experience'],
                type: resourceResponse['types'][0]['type']['name'] || '',
                id: resourceResponse['id']
            }
            return data;
        }));
        return pokemonData;
    } catch (error) {
        throw error;
    }
};

