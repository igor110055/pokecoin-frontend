import styled from 'styled-components';

export const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const SearchRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
`

export const ButtonPage = styled.button`
    display: flex;
    height: 40px;
    width: 150px;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--poke-blue);
    color: white;
    border-radius: 12px;
    margin: 0 5px;
`

export const BuyButton = styled.button`
    display: flex;
    height: 40px;
    width: 150px;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--type-BUY);
    color: white;
    border-radius: 12px;
    margin: 0 5px;
`
export const InputText = styled.input`
    height: 50px;
    border-radius: 12px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    background: #fff;
    border: none;
    padding: 15px 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    font-size: 16px;
    :focus {
        outline: none;
    }
    ::placeholder {
        font-style: italic;
    }

`
export const SearchPokemon = styled.button`
    display: flex;
    height: 50px;
    width: 50px;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--poke-blue);
    color: white;
    border-radius: 12px;
    margin: 0 5px;
`