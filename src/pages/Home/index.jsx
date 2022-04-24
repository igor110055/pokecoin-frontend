import PokemonCard from "../../components/PokemonCard";
import { Container } from '../../styles/global';
import { ButtonRow, ButtonNav } from './styles';
function Home() {
    return (
        <Container>
            <ButtonRow>
                <ButtonNav>Next Page</ButtonNav>
                <ButtonNav>Prev Page</ButtonNav>
            </ButtonRow>
            <PokemonCard pokemonType='normal'>
                nome
                preco
                comprar
            </PokemonCard>
        </Container>
    )
};

export default Home;