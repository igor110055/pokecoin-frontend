import Transactions from './Transactions';
import { PokeCoinApiProvider } from '../../contexts/PokecoinApi/index';

function TransactionsPage() {
    return(
        <PokeCoinApiProvider>
            <Transactions/>
        </PokeCoinApiProvider>
    );
};

export default TransactionsPage;