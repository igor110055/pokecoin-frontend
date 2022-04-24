import { btcCurrencyApi } from '../services/config'
const SATOSHI = 0.00000001;

export const getBtcCurrency = async () => {
    const response = await btcCurrencyApi.get();
    const { amount } = response.data.data;
    return amount;
};


export const calculatePokemonUsdValue = ({btcCurrency, pokemonExperience}) => parseFloat((btcCurrency) * SATOSHI * pokemonExperience);
