import { useContext, useEffect } from 'react';
import PokemonCard from '../../components/PokemonCard';
import { Container, Row } from '../../styles/global';
import { ButtonRow, ButtonPage, BuyButton } from './styles';
import { PokedexApiContext } from '../../contexts/PokeApi/index';

function Home() {
    const { pokemonsList, nextPage, prevPage, handleSearchPokemons, handleChangePokemonName, handleGetPokemonsByPage, handleBuyPokemon} = useContext(PokedexApiContext)

    return (
        <Container>
            <ButtonRow>
                {prevPage && <ButtonPage  onClick={() => handleGetPokemonsByPage(prevPage)}>Página anterior</ButtonPage>}
                {nextPage && <ButtonPage onClick={() => handleGetPokemonsByPage(nextPage)}>Próxima página</ButtonPage>}
            </ButtonRow>
            {
                pokemonsList.map((pokemon) => (
                    <PokemonCard pokemonType={pokemon.type} key={pokemon.id}>
                        <Row>
                            <img alt='Pokemon img' src={pokemon.imgUrl} height={65}/>
                            <div>
                                <p>{pokemon.name}</p>
                                <p>Xp: {pokemon.baseExperience}</p>
                            </div>
                        </Row>
                        preco
                        <BuyButton onClick={() => {handleBuyPokemon(pokemon)}}>Comprar</BuyButton>
                    </PokemonCard>
                ))
            }
        </Container>
    )
};

export default Home;