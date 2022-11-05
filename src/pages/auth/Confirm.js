import { Center, Loader, MantineProvider, Modal } from "@mantine/core";
import "../../stylesheets/auth/style.css";
import emailImage from "../../images/email.png";
import { useEffect, useState } from "react";
import { getInfo } from "../../utils/userAuth";
import axios from "axios";

const Confirm = () => {
  const [info, setInfo] = useState("")
  const [status, setStatus] = useState("")
  const [modal, setModal] = useState("")
  useEffect(() => {
    const getDetails = getInfo();
    if (getInfo) setInfo(getDetails)
  }, [])

  const resendToken = () => {
    axios.post("http://127.0.0.1:8080/api/v1/user/generate", { email: info.email })
      .then(res => {
        console.log(res.data)
        setStatus(res.data.status)
      }).catch(err => {
        console.log(err)
        setStatus(err)
      })
  }
  return (
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
      <Modal
        opened={modal}

        onClose={() => {
          status !== "" ? setModal(false) : setModal(true)
        }}
        title={
          <h2>
            {
              (status === "failed" && "Failed") ||
              (status === "success" && "Success") ||
              (status === "" && "Please wait..")
            }
          </h2>
        }
      >
        <Center>{!status && <Loader color={"major.0"} size={"xl"} variant="dots" />}</Center>
        <p style={{ fontWeight: "500" }}>
          {
            ((status === "error" || status === "failed") && "An error occurred") ||
            (status === "success" && "Verification sent")
          }
        </p>
      </Modal>
      <div className="confirmationContainer">
        <div className="emailNarration">
          <img src={emailImage} alt="" />

          <div>
            <h1>We are almost done</h1>
            <p>
              We sent a verification link to <span>{info.email}</span>
            </p>
            <p>click on the link to verify your mail</p>
          </div>
        </div>

        <div>
          Didn’t get an email? Kindly click
          <span style={{ cursor: "pointer" }} onClick={() => {
            setStatus("")
            setModal(true)
            resendToken();
          }}>
            resend email
          </span>
        </div>
      </div>
    </MantineProvider>
  );
};

export default Confirm;
