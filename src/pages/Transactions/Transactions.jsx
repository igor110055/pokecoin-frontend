import { useContext } from 'react';
import PokemonCard from '../../components/PokemonCard';
import { PokeCoinApiContext } from '../../contexts/PokecoinApi';
import { Container } from '../../styles/global';
import { Row, InfoText } from './styles';

const getTimeFormatted = (date) => {
    return new Date(date).toLocaleTimeString('pt-BR')
}

const getDateFormatted = (date) => {
    return new Date(date).toLocaleDateString('pt-BR')
}

function Transactions() {
    const { allTransactions } = useContext(PokeCoinApiContext);
    return (
        <Container>
         {
             allTransactions.map((transaction) => (
                 <PokemonCard key={transaction.id} pokemonType={transaction.transactionType}>
                     <Row>
                     <img alt='Pokemon img' src={transaction.pokemonId.pokemonSpriteUrl}/>
                     <div>
                         <p>{transaction.pokemonId.pokemonName}</p>
                         <p>Xp: {transaction.pokemonId.pokemonExperience}</p>
                     </div>
                     </Row>
                     <Row>
                         <InfoText>Data {getDateFormatted(transaction.transactionDate)} {getTimeFormatted(transaction.transactionDate)}</InfoText>
                         <InfoText>- Cotação ${transaction.btcCurrency}</InfoText>
                         <InfoText>- Valor de {transaction.transactionType === 'SALE' ? 'Venda' : 'Compra'} ${transaction.pokemonUsdValue}</InfoText>
                     </Row>
                 </PokemonCard>
             ))
         }
        </Container>
    )
};

export default Transactions;