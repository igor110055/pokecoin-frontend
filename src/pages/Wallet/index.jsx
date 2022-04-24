import Wallet from "./Wallet";
import { PokeCoinApiProvider } from '../../contexts/PokecoinApi/index';

function WalletPage() {
    return(
        <PokeCoinApiProvider>
            <Wallet/>
        </PokeCoinApiProvider>
    );
};

export default WalletPage;