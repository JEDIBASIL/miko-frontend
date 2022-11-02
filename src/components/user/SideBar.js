import {NavLink as A, useLocation} from "react-router-dom"
import {IoHome, IoWallet, IoPerson, IoSettingsSharp, IoSwapHorizontal,IoCash} from "react-icons/io5"
const SideBar = () => {
  const loaction = useLocation();
  return (
    <div className='sideBar'>
        <menu>
            <ul>
                <li><A className={(loaction.pathname !=="/app" ) && "base"} to="/app"><IoHome />Home</A></li>
                <li><A to="/app/wallet"><IoWallet />Wallet</A></li>
                <li><A to="/app/p2p"><IoSwapHorizontal />P2P</A></li>
                <li><A to="/app/swap"><IoSwapHorizontal />Swap</A></li>
                <li><A to="/app/transactions"><IoCash />Transactions</A></li>
                <li><A to="/app/settings"><IoSettingsSharp />Settings</A></li>
            </ul>
        </menu>
    </div>
  )
}

export default SideBar