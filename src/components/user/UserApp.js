import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"
import "../../stylesheets/user/style.css"
import SideBar from "./SideBar"
import { MantineProvider } from "@mantine/core"
import { useEffect, useState } from "react"
import axios from "axios"
import { getAuthToken } from "../../utils/userAuth"
const UserApp = () => {
  const [userInfo, setUserInfo] = useState({})
  useEffect(() => {
    getInfo();
  }, [0])

  const config = {
    headers: {
      "Authorization": `Bearer ${getAuthToken("WsAQ")}`
    }
  }

  const getInfo = () => {
    console.log(config.headers.Authorization)
    axios.get("http://127.0.0.1:8080/api/v1/user/info", config)
      .then(res => {
        console.log(res)
        setUserInfo(res.data.data)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <MantineProvider
      theme={
        {
          colorScheme: "light",
          colors: {
            major: ["#464fca","#464fca","#464fca"]
          },
          primaryColor: "major",
        }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div className="userApp">
        <TopBar name={userInfo.username} />
        <div className="userAppContainer">
          <SideBar />
          <div className="userAppContent">
            <Outlet />
          </div>
        </div>
      </div>
    </MantineProvider>
  )
}

export default UserApp