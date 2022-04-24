import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    height: 80px;
    background: var(--poke-blue);
    position: relative;
    z-index: 99;
`
export const HeaderRow = styled.div`
    display: flex;
    width: 100%;
    justify-content:space-between;
    align-items: center;
    color: white;
    padding: 0 2rem;
`

export const BTCInfo = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
`
export const BTCText = styled.p`
    margin: 0 10px;
`