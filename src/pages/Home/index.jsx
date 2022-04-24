import Home from "./Home";
import { PokedexApiProvider } from '../../contexts/PokeApi/index';

function HomePage({ btcCurrency }) {
    return(
        <PokedexApiProvider>
            <Home btcCurrency={btcCurrency} />
        </PokedexApiProvider>
    )
}

export default HomePage