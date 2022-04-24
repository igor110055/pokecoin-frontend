import { useContext } from 'react';
import { Container, Row } from '../../styles/global';
import { PokeCoinApiContext } from '../../contexts/PokecoinApi';
import { WalletInfo, SellButton, SellRow, WalletRow, WalletText } from './styles';
import PokemonCard from '../../components/PokemonCard';
import { calculatePokemonUsdValue } from '../../utils/btcutils';
import { Icon } from '@iconify/react';

function Wallet({ btcCurrency }) {

    const getValorization = (buy, sell) => {
        return buy < sell
    }

    const { pokemonsActivestransactions, currentProfit, totalInvested, handleSellPokemons } = useContext(PokeCoinApiContext);
    return (
        <Container>
            <WalletInfo>
                <WalletRow>
                    <WalletText>Lucro em vendas: $ {parseFloat(currentProfit).toFixed(6)}</WalletText>
                    <WalletText>Valor em ativos: $ {parseFloat(totalInvested).toFixed(6)}</WalletText>
                </WalletRow>
            </WalletInfo>
            <div>
                {
                    !pokemonsActivestransactions.length > 0 ?
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>Não há pokemons em sua carteira</p> :
                        pokemonsActivestransactions.map((pokemon) => (
                            <PokemonCard key={pokemon._id} pokemonType='DEFAULT'>
                                <Row>
                                    <img alt='Pokemon img' src={pokemon.pokemonId.pokemonSpriteUrl} height={65} />
                                    <div>
                                        <p>{pokemon.pokemonId.pokemonName}</p>
                                        <p>Xp: {pokemon.pokemonId.pokemonExperience}</p>
                                    </div>
                                </Row>
                                <SellRow>
                                    <p>Compra: $ {pokemon.pokemonUsdValue.toFixed(6)}</p>
                                    <p>Venda: $ {calculatePokemonUsdValue({ btcCurrency, pokemonExperience: pokemon.pokemonId.pokemonExperience }).toFixed(6)}
                                        <Icon icon={
                                            `akar-icons:arrow-${getValorization(pokemon.pokemonUsdValue, calculatePokemonUsdValue({ btcCurrency, pokemonExperience: pokemon.pokemonId.pokemonExperience }))
                                                ? 'up' : 'down'}`
                                        } />
                                    </p>
                                    <SellButton onClick={() => handleSellPokemons(pokemon.pokemonId._id)}>Vender</SellButton>
                                </SellRow>
                            </PokemonCard>
                        ))
                }
            </div>
        </Container>
    )
};

export default Wallet;