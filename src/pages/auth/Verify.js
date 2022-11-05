import "../../stylesheets/auth/style.css";
import { useParams } from "react-router";
import logoImg from "../../images/logo.png";
import { Loader, MantineProvider, Notification } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Link as A } from "react-router-dom";
import {
  IoCheckmarkSharp,
  IoAlertOutline,
  IoCloudOfflineSharp,
} from "react-icons/io5";

import axios from "axios";

const Verify = () => {
  const params = useParams();
  const token = params.token;
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");


  const verify = useCallback(() => {
    axios.post("http://127.0.0.1:8080/api/v1/user/verify", { token })
      .then(res => {
        setStatus(res.data.status);
        res.data.message && setMessage(res.data.message);
      }).catch(err => {
        console.log(err)
        setStatus("error")
      })
  },[token,status,message])
  useEffect(() => {
    verify()
  }, [verify]);

  return (
    <>
      {status === "success" && <Navigate to="/auth/sign-in" />}
      <MantineProvider
        theme={{
          colorScheme: "dark",
          colors: {
            major: ["#464fca"],
          },
          primaryColor: "major",
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <div className="notificationContainer">
          {status !== "" && <Notification
            icon={
              (status === "loading" && (
                <Loader color={"major.0"} size={"md"} variant="oval" />
              )) ||
              (status === "error" && <IoCloudOfflineSharp size={"22"} />) ||
              (status === "failed" && <IoAlertOutline size={"22"} />) ||
              (status === "success" && <IoCheckmarkSharp size={"22"} />)
            }
            color={
              ((status === "error" || status === "failed") && "red") ||
              (status === "success" && "teal")
            }
            title={<h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>}
          >
            <p style={{ fontWeight: "500" }}>
              {
                (message.includes("no token") || message.includes("invalid") || message.includes("failed") || message.includes("expired")) && "Verification failed"
              }
              {
                message.includes("already") && "Account already verified"
              }
              {
                status === "success" && "Account verified"
              }
            </p>
          </Notification>
          }
        </div>
        <div className="verificationContainer">
          <div className="container">
            <A to={"/"} className="formLogoContainer">
              <img src={logoImg} alt="" />
              <h1>Miko</h1>
            </A>
            <h3>Please wait..</h3>
            <p>Verification in progress</p>
            <div className="loaderContainer">
              <Loader color={"major.0"} size={"xl"} variant="dots" />
            </div>
          </div>
        </div>
      </MantineProvider>
    </>
  );
};

export default Verify;
