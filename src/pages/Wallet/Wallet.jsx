import { useContext } from 'react';
import { Container, Row } from '../../styles/global';
import { PokeCoinApiContext } from '../../contexts/PokecoinApi';
import { WalletInfo, SellButton, SellRow, WalletRow, WalletText } from './styles';
import PokemonCard from '../../components/PokemonCard';



function Wallet() {
    const { pokemonsActivestransactions, currentProfit, totalInvested, handleSellPokemons } = useContext(PokeCoinApiContext);
    return (
        <Container>
            <WalletInfo>
                <WalletRow>
                    <WalletText>Lucro em vendas: $ {parseFloat(currentProfit).toFixed(5)}</WalletText>
                    <WalletText>Valor em ativos: $ {parseFloat(totalInvested).toFixed(5)}</WalletText>
                </WalletRow>
            </WalletInfo>
            <div>
                {
                    pokemonsActivestransactions.map((pokemon) => (
                        <PokemonCard key={pokemon._id} pokemonType='DEFAULT'>
                            <Row>
                                <img alt='Pokemon img' src={pokemon.pokemonId.pokemonSpriteUrl} height={65}/>
                                <div>
                                    <p>{pokemon.pokemonId.pokemonName}</p>
                                    <p>Xp: {pokemon.pokemonId.pokemonExperience}</p>
                                </div>
                            </Row>
                            <SellRow>
                                <p>Compra: $ {pokemon.pokemonUsdValue.toFixed(5)}</p>
                                <p>Venda: $ {pokemon.pokemonUsdValue.toFixed(5)}</p>
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