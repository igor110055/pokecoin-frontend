import { useState, createContext, useEffect } from 'react';
import { getPokemonsActives } from '../../services/pokecoin-api';

const PokeCoinApiContext = createContext({});

export function PokeCoinApiProvider({ children }) {
    const [profit, setProfit] = useState('');
    const [transactionsHistory, setTransactionsHistory] = useState([]);

    const handleGetPokemonsActives = async () => {
        try {
            const response = await getPokemonsActives();
            const { currentInvested, pokemons } = response.data;
            setProfit(currentInvested.invested);
            setTransactionsHistory(pokemons);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetPokemonsActives();
    }, []);

    useEffect(() => {
        console.log(profit)
        console.log(transactionsHistory)
    }, [profit, transactionsHistory]);

    return(
        <PokeCoinApiContext.Provider value={{profit, transactionsHistory}}>
            {children}
        </PokeCoinApiContext.Provider>
    )
}