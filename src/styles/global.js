import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --poke-blue: #0075BE;
        --type-BUY: #4ABF0A;
        --type-SALE: #BF150A;
        --type-normal: #C2C2A1;
        --type-flying: #BAB0D5; 
        --type-ghost: #735797; 
        --type-dark: #333;         
        --type-steel: #CCCCDE;         
        --type-ground: #B1736C;         
        --type-poison: #7C538C;         
        --type-grass: #48D0B0;         
        --type-fire: #FB6C6C;         
        --type-electric: #FFD86F;         
        --type-fairy: #f469a9;         
        --type-bug: #C3CE75;         
        --type-fighting: #d6b591;         
        --type-water: #609FB5;         
        --type-psychic: #9B7FA6;         
        --type-ice: #7FCCEC;         
        --type-rock: #a6aab6;         
        --type-dragon: #F9BE00; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }
`
export const PageView = styled.div`
    margin-left: 100px;
`

export const Container = styled.main`
    width: 100%;
    background: #ededed;
    height: calc(100vh - 80px);
    padding: 30px 100px;
    overflow-y: auto;
`