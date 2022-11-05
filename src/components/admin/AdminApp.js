import { Outlet } from "react-router"
import "../../stylesheets/admin/style.css"
import SideBar from "./SideBar"

const AdminApp = () => {
    return (
        <div className="adminApp">
            <SideBar />
            <div className="adminAppContainer">
                <div className="adminTopNav"></div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminApp