import { useState, createContext, useEffect } from 'react';
import { getPokemonsActives, getTransactions, sellPokemon } from '../../services/pokecoin-api';
import { toast } from 'react-toastify';

export const PokeCoinApiContext = createContext({});

export function PokeCoinApiProvider({ children }) {
    const [totalInvested, setTotalInvested] = useState('');
    const [pokemonsActivestransactions, setPokemonsActivestransactions] = useState([]);
    const [currentProfit, setCurrentProfit] = useState('');
    const [allTransactions, setAllTransactions] = useState([]);
    const [apiLoading, setApiLoading] = useState(false)

    const handleGetPokemonsActives = async () => {
        try {
            setApiLoading(true);
            const response = await getPokemonsActives();
            const { currentInvested, pokemons } = response.data;
            setTotalInvested(currentInvested.invested);
            setPokemonsActivestransactions(pokemons);
            setApiLoading(false);
        } catch (error) {
            console.log(error);
            setApiLoading(false);
            toast.error('Houve um problema ao recuperar os pokemons ativos :/');
        }
    };

    const handleGetTransactionsHistory = async () => {
        try {
            setApiLoading(true);
            const response = await getTransactions();
            const { currentProfit, transactions } = response.data;
            setCurrentProfit(currentProfit.profit);
            setAllTransactions(transactions);
            setApiLoading(false);
        } catch (error) {
            setApiLoading(false);
            console.log(error);
            toast.error('Houve um problema ao recuperar o histórico :/');
        }
    };

    const handleSellPokemons = async (pokemonId) =>  {
        try {
            await sellPokemon({ pokemonId });
            toast.success('Pokemon vendido com sucesso!');
            await getAllMetrics();
        } catch (error) {
            console.log(error);
            toast.error('Houve um problema na venda :/');
        }
    };

    const getAllMetrics = async () => {
        await Promise.all([
            handleGetPokemonsActives(),
            handleGetTransactionsHistory(),
        ]);
    };

    useEffect(() => {
        getAllMetrics();
    }, []);


    return (
        <PokeCoinApiContext.Provider value={{totalInvested, pokemonsActivestransactions, apiLoading, currentProfit, allTransactions, handleSellPokemons}}>
            {children}
        </PokeCoinApiContext.Provider>
    )
}