import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 12px;
    width: 100%;
    height: 80px;
    margin: 20px 0;
    background: ${ props  => `var(--type-${props.pokemonType})`};
    color: white;

    p {
        text-transform: capitalize;
    }
`