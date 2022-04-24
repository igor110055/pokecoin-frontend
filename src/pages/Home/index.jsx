import Home from "./Home";
import { PokedexApiProvider } from '../../contexts/PokeApi/index';

function HomePage() {
    return(
        <PokedexApiProvider>
            <Home/>
        </PokedexApiProvider>
    )
}

export default HomePage