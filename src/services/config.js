import axios from 'axios';

export const pokecoinApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const btcCurrencyApi = axios.create({
  baseURL: process.env.REACT_APP_COINBASE_API
})