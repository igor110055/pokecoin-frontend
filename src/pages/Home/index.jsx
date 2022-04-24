import Home from "./Home";
import { PokeCoinApiProvider } from '../../contexts/PokecoinApi/index';

function HomePage() {
    return(
        <PokeCoinApiProvider>
            <Home/>
        </PokeCoinApiProvider>
    )
}

export default HomePage