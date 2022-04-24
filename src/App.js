import { Routes, Route, Link } from "react-router-dom";
import { PageView } from './styles/global';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Transactions from './pages/Transactions';
import LeftNavBar from './components/LeftNavBar';
import TopNavBar from "./components/TopNavBar";
import PokeCoinLogo from './assets/images/PokeCoin.png';

function App() {
  return (
    <div>
      <TopNavBar>
        <img src={PokeCoinLogo}/>
      </TopNavBar>
      <LeftNavBar>
        <Link to="/">Home</Link>
        <Link to="/wallet">Wallet</Link>
        <Link to="/transactions">Transactions</Link>
      </LeftNavBar>
      <PageView>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </PageView>
    </div>
  );
}

export default App;
