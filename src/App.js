import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation} from "react-router-dom";
import { PageView, LinkDiv } from './styles/global';
import HomePage from './pages/Home';
import WalletPage from './pages/Wallet';
import TransactionsPage from './pages/Transactions';
import LeftNavBar from './components/LeftNavBar';
import TopNavBar from "./components/TopNavBar";
import PokeCoinLogo from './assets/images/PokeCoin.png';
import { Icon } from '@iconify/react';
import { getBtcCurrency } from "./utils/btcutils";

function App() {
  const location = useLocation();
  const [btcCurrency, setBtcCurrency]= useState(0);

  const handleBtcCurrency = async () => {
    try {
      const response = await getBtcCurrency();
      setBtcCurrency(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleBtcCurrency()
  }, []);

  return (
    <div>
      <TopNavBar currentPage={location.pathname} btcCurrency={btcCurrency}>
        <img src={PokeCoinLogo} />
      </TopNavBar>
      <LeftNavBar>
        <LinkDiv pageActive={location.pathname === '/'}>
          <Link to="/"><Icon icon="ant-design:shopping-cart-outlined" width={40} /></Link>
        </LinkDiv>
        <LinkDiv pageActive={location.pathname === '/wallet'}>
          <Link to="/wallet"><Icon icon="entypo:wallet" width={40} /></Link>
        </LinkDiv>
        <LinkDiv pageActive={location.pathname === '/transactions'}>
          <Link to="/transactions"><Icon icon="ant-design:history-outlined" width={40} /></Link>
        </LinkDiv>
      </LeftNavBar>
      <PageView>
        <Routes>
          <Route path="/" element={<HomePage btcCurrency={btcCurrency}/>} />
          <Route path="wallet" element={<WalletPage btcCurrency={btcCurrency} />} />
          <Route path="transactions" element={<TransactionsPage />} />
        </Routes>
      </PageView>
    </div>
  );
}

export default App;
