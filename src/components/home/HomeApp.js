import {Outlet} from "react-router-dom"
import Footer from "./Footer"
import HomeNavbar from "./HomeNavbar"

import "../../stylesheets/Home/style.css"
const HomeApp = () => {
  return (
    <div>
        <HomeNavbar />
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default HomeApp