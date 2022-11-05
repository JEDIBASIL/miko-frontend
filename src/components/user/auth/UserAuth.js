// import { Navigate } from "react-router"
// import { isAuth } from "../../../utils/userAuth";
const UserAuth = ({children}) => {

  return (
    children
    // !isAuth() ? children : <Navigate to={`/`}/>
  )
}

export default UserAuth