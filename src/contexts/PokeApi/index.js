import { useState, createContext, useEffect } from 'react';
import { getPokemonsByName, getAllPokemons, getPokemonsByPage } from '../../services/pokedex-api';
import { buyPokemon } from '../../services/pokecoin-api';

export const PokedexApiContext = createContext({});

export function PokedexApiProvider({ children }) {
    const [pokemonsList, setPokemonsList] = useState([]);
    const [pokemonName, setPokemonName] = useState('');
    const [nextPage, setNextPage] = useState(null);
    const [prevPage, setPrevPage] = useState(null);

    const handleChangePokemonName = (event) => {
        setPokemonName(event.target.value);
    };

    const handleSearchPokemons = async () => {
        try {
            if (pokemonName) {
                await handleGetPokemonByName();
                return;
            }
            await handleGetAllPokemons();
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetPokemonByName = async () => {
        try {
            const response = await getPokemonsByName({ pokemonName });
            setPokemonsList(response);
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetAllPokemons = async () => {
        try {
            const response = await getAllPokemons();
            setNextPage(response.next)
            setPrevPage(response.prev)
            setPokemonsList(response.pokemonData)
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetPokemonsByPage = async (page) => {
        try {
            const response = await getPokemonsByPage(page);
            console.log('rres', response)
            setNextPage(response.next)
            setPrevPage(response.prev)
            setPokemonsList(response.pokemonData)
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuyPokemon = async (pokemon) => {
        console.log(pokemon)
        try {
            const body = {
                pokemonId: pokemon.id,
                pokemonName: pokemon.name,
                pokemonExperience: pokemon.baseExperience,
                pokemonSpriteUrl: pokemon.imgUrl,
                pokemonType: pokemon.type
            }
            const res = await buyPokemon(body);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(() => {
        handleGetAllPokemons();
    }, []);

    return (
        <PokedexApiContext.Provider value={{ pokemonsList, nextPage, prevPage, handleSearchPokemons, handleChangePokemonName, handleGetPokemonsByPage, handleBuyPokemon }}>
            {children}
        </PokedexApiContext.Provider>
    )

}