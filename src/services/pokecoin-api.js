import { pokecoinApi } from './config';

export const buyPokemon = async (payload) => {
    try {
        const body = payload
        const response = await pokecoinApi.post('/pokemon/buy', body);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getPokemonsActives = async () => {
    try {
        const response = await pokecoinApi.get('/pokemon/all/actives');
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const sellPokemon = async (payload) => {
    const { pokemonId } = payload;
    try {
        const response = await pokecoinApi.post(`/pokemon/sell/${pokemonId}`)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTransactions = async (payload) => {
    try {
        const response = await pokecoinApi.get('/transactions/all');
        return response.data;
    } catch (error) {
        throw error;
    }
};
