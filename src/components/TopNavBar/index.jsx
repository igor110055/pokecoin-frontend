import { Header, HeaderRow, BTCInfo, BTCText } from './styles';
import { Icon } from '@iconify/react';

function TopNavBar({ currentPage, btcCurrency, children }) {
    return (
        <Header>
            {children}
            <HeaderRow>
                <h2>{currentPage === '/' ? 'Loja de pokemons' : currentPage === '/wallet' ? 'Carteira' : 'Histórico de transações'}</h2>
                <BTCInfo>
                    <BTCText>Última cotação: </BTCText>
                    <Icon icon='logos:bitcoin' height={30}/> 
                    <BTCText>${btcCurrency}</BTCText>
                </BTCInfo>
            </HeaderRow>
        </Header>
    );
};

export default TopNavBar;