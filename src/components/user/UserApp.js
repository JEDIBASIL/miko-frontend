import { Outlet } from "react-router-dom"
import TopBar from "./TopBar"
import "../../stylesheets/user/style.css"
import SideBar from "./SideBar"
import { MantineProvider } from "@mantine/core"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { getAuthToken } from "../../utils/userAuth"
const UserApp = () => {
  const [userInfo, setUserInfo] = useState({})


  

  const getInfo = useCallback(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${getAuthToken("WsAQ")}`
      }
    }
    axios.get("http://127.0.0.1:8080/api/v1/user/info", config)
      .then(res => {
        setUserInfo(res.data.data)
      }).catch(err => {
        console.log(err)
      })
  },[]);

  useEffect(() => {
    getInfo();
  }, [getInfo])

  return (
    <MantineProvider
      theme={
        {
          colorScheme: "light",
          colors: {
            major: ["#464fca", "#464fca", "#464fca"]
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