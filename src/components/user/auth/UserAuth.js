import { Navigate } from "react-router"
import { isAuth } from "../../../utils/userAuth";
const UserAuth = ({children}) => {

  return (
    isAuth() ? children : <Navigate to={`/`}/>
  )
}

export default UserAuth