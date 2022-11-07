import {IoNotificationsOutline} from "react-icons/io5"
import logo from "../../images/logo.png"
import {Link as A} from "react-router-dom"
const TopBar = ({name}) => {
  return (
    <div className="topBar">
      <A to={"/app"} className="logo">
        <img src={logo} alt="" />
        <h2>Miko</h2>
      </A>
      <div className="nameAndNotification">
        <IoNotificationsOutline />
        <p>{name}</p>
      </div>

      
    </div>
  )
}

export default TopBar