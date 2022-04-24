import { Card } from './styles';

function PokemonCard({pokemonType,  children }) {
    return (
        <Card pokemonType={pokemonType} >
            {children}
        </Card>
    );
};

export default PokemonCard;