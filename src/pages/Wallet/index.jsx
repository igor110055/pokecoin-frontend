import Wallet from "./Wallet";
import { PokeCoinApiProvider } from '../../contexts/PokecoinApi/index';

function WalletPage({ btcCurrency }) {
    return(
        <PokeCoinApiProvider>
            <Wallet btcCurrency={btcCurrency}/>
        </PokeCoinApiProvider>
    );
};

export default WalletPage;