import { useState, createContext, useEffect } from 'react';
import { getPokemonsActives, getTransactions } from '../../services/pokecoin-api';

export const PokeCoinApiContext = createContext({});

export function PokeCoinApiProvider({ children }) {
    const [totalInvested, setTotalInvested] = useState('');
    const [pokemonsActivestransactions, setPokemonsActivestransactions] = useState([]);
    const [currentProfit, setCurrentProfit] = useState('');
    const [allTransactions, setAllTransactions] = useState([]);

    const handleGetPokemonsActives = async () => {
        try {
            const response = await getPokemonsActives();
            const { currentInvested, pokemons } = response.data;
            setTotalInvested(currentInvested.invested);
            setPokemonsActivestransactions(pokemons);
        } catch (error) {
            console.log(error)
        }
    }

    const handleGetTransactionsHistory = async () => {
        try {
            const response = await getTransactions();
            const { currentProfit, transactions } = response.data;
            setCurrentProfit(currentProfit.profit);
            setAllTransactions(transactions);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleGetPokemonsActives();
        handleGetTransactionsHistory();
    }, []);


    return (
        <PokeCoinApiContext.Provider value={{totalInvested, pokemonsActivestransactions, currentProfit, allTransactions}}>
            {children}
        </PokeCoinApiContext.Provider>
    )
}