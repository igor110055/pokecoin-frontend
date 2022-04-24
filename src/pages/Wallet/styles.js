import styled from 'styled-components'

export const WalletInfo = styled.div`
    display: flex;
    width: 100%;
    color: white;
    align-items: center;
    justify-content: center;
`
export const SellButton = styled.button`
    display: flex;
    height: 40px;
    width: 150px;
    align-items: center;
    justify-content: center;
    border: none;
    background: var(--type-SALE);
    color: white;
    border-radius: 9px;
`

export const SellRow = styled.div`
    width: 60%;
    height: 100%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const WalletRow = styled.div`
    width: 50%;
    height: 90px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: var(--poke-blue);
    border-radius: 12px;

`
export const WalletText = styled.p`
    font-size: 1.25rem;
    font-weight: 'bold';
`