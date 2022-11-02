import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeApp from "./components/home/HomeApp";
import UserApp from "./components/user/UserApp";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";
import Transaction from "./pages/userDashboard/Transaction";
import UserHome from "./pages/userDashboard/UserHome";
import Wallet from "./pages/userDashboard/Wallet";
import P2P from "./pages/userDashboard/P2P";
import Settings from "./pages/userDashboard/Settings";
import UserAuth from "./components/user/auth/UserAuth";
import Confirm from "./pages/auth/Confirm";
import Verify from "./pages/auth/Verify";
import Coin from "./pages/userDashboard/Coin";
import Buy from "./pages/userDashboard/Buy";
import Sell from "./pages/userDashboard/Sell";
import Swap from "./pages/userDashboard/Swap";
import FundWallet from "./pages/userDashboard/FundWallet";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeApp />}>
            <Route path="/" element={<Home />}></Route>
          </Route>

          <Route path="/auth/sign-in" element={<SignIn />}></Route>
          <Route path="/auth/sign-up" element={<SignUp />}></Route>
          <Route path="/auth/confirm" element={<Confirm />}></Route>
          <Route path="/auth/verify/:token" element={<Verify />}></Route>

          <Route path="/app" element={<UserAuth children={<UserApp />} />}>
            <Route index element={<UserHome />}></Route>
            <Route path="/app/wallet" element={<Wallet />}></Route>
            <Route path="/app/wallet/:coin" element={<Coin />}></Route>
            <Route path="/app/transactions" element={<Transaction />}></Route>
            <Route path="/app/p2p" element={<P2P />}></Route>
            <Route path="/app/swap" element={<Swap />}></Route>
            <Route path="/app/settings" element={<Settings />}></Route>
            <Route path="/app/wallet/buy" element={<Buy />}></Route>
            <Route path="/app/wallet/fund" element={<FundWallet />}></Route>
            <Route path="/app/wallet/sell" element={<Sell />}></Route>

          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
