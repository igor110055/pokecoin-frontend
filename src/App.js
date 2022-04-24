import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Transactions from './pages/Transactions';

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/wallet">Wallet</Link>
            <Link to="/transactions">Transactions</Link>
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="transactions" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
