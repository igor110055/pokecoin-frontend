import { useContext } from 'react';
import PokemonCard from '../../components/PokemonCard';
import { PokeCoinApiContext } from '../../contexts/PokecoinApi';
import { Container, Row } from '../../styles/global';
import { InfoText, TransactionRow } from './styles';
import { Icon } from '@iconify/react';

const getTimeFormatted = (date) => {
    return new Date(date).toLocaleTimeString('pt-BR')
}

const getDateFormatted = (date) => {
    return new Date(date).toLocaleDateString('pt-BR')
}

function Transactions() {
    const { allTransactions, apiLoading } = useContext(PokeCoinApiContext);
    return (
        <Container>
            {apiLoading ?
            <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                <Icon height={40} icon='eos-icons:loading'/>
            </div>
                
                :
                !allTransactions.length > 0 ?
                    <p style={{ textAlign: 'center' }}>Não há histórico de transações</p> :
                    allTransactions.map((transaction) => (
                        <PokemonCard key={transaction.id} pokemonType={transaction.transactionType}>
                            <Row>
                                <img alt='Pokemon img' src={transaction.pokemonId.pokemonSpriteUrl} height={65} />
                                <div>
                                    <p>{transaction.pokemonId.pokemonName}</p>
                                    <p>Xp: {transaction.pokemonId.pokemonExperience}</p>
                                </div>
                            </Row>
                            <TransactionRow>
                                <InfoText>Data {getDateFormatted(transaction.transactionDate)} {getTimeFormatted(transaction.transactionDate)}</InfoText>
                                <InfoText>Cotação ${transaction.btcCurrency}</InfoText>
                                <InfoText>Valor de {transaction.transactionType === 'SALE' ? 'Venda' : 'Compra'} ${transaction.pokemonUsdValue.toFixed(6)}</InfoText>
                            </TransactionRow>
                        </PokemonCard>
                    ))
            }
        </Container>
    )
};

export default Transactions;