import { NavLink as A, useLocation } from "react-router-dom"
import { IoHome, IoCashSharp, IoPerson, IoSettingsSharp, IoSwapHorizontal, IoPower } from "react-icons/io5"

const SideBar = () => {
    const loaction = useLocation();
    return (
        <div className="adminSideBar">
            <menu>
                <ul>
                    <li><A className={(loaction.pathname !== "/admin") && "base"} to="/admin"><IoHome />Dashboard</A></li>
                    <li><A to="/admin/wallet"><IoPerson />Users</A></li>
                    <li><A to="/admin/p2p"><IoCashSharp />Coin</A></li>
                    <li><A to="/admin/swap"><IoSwapHorizontal />Swap</A></li>
                </ul>
                <ul>
                    <li><A to="/admin/settings"><IoSettingsSharp />Settings</A></li>
                    <li><A to="/admin/settings"><IoPower />Log out</A></li>
                </ul>
            </menu>
        </div>
    )
}

export default SideBar