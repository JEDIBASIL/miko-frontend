import {
  TextInput,
  PasswordInput,
  Button,
  MantineProvider,
  Grid,
  Notification,
  Loader
} from "@mantine/core";
import "../../stylesheets/auth/style.css";
import logoImg from "../../images/logo.png";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { zodResolver, useForm } from "@mantine/form";
import { z } from "zod";
import { useState } from "react";
import {IoCheckmarkSharp,IoAlertOutline,IoCloudOfflineSharp} from "react-icons/io5"
import { Navigate, Link as A } from "react-router-dom";
import { setInfo, isAuth } from "../../utils/userAuth";


const SignUp = () => {
  const [status,setStatus] = useState("")
  const [message, setMessage] = useState("")
  const schema = z
    .object({
      username: z
        .string()
        .min(3, { message: "Username should be atleast 3 characters" })
        .max(25, { message: "Username should not be more than 25 characters" }),
      email: z.string().email({ message: "Invalid email address" }),
      password: z
        .string()
        .min(8, { message: "Password should atleast be 8 letters" }),
      confirmPassword: z
        .string()
        .min(6, { message: "Password should atleast be 8 letters" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "password do not match",
    });

  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });


  const registerUser = (user) => {
       axios.post("localhost:8080/api/v1/user/register",user)
        .then(res =>{
          console.log(res.data)
            setStatus(res.data.status)
            setMessage(res.data.message)
            res.data.status ==="success" && setInfo({email:user.email})
        }).catch(err =>{
          console.log(err)
          setStatus("error")
        })
  };

  const submit = ({username,email,password}) => {
    const user = {
      username,
      email,
      password,
    };
    user && setStatus("loading");
    registerUser(user);
  };
  return (
    <>
      {isAuth() && <Navigate to={`/app`}/>}
      {
        status === "success" ? <Navigate to={"/auth/confirm"} /> :
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
        {
          status !== ""
          &&
        <div className="notificationContainer">
            <Notification 
            icon={
            (status === "loading" && ( <Loader color={"major.0"}  size={"md"} variant="oval"/> ))||
            (status === "error" &&  (<IoCloudOfflineSharp size={"22"} />)) ||
            (status === "failed" &&  (<IoAlertOutline size={"22"} />)) ||
            (status === "success" &&  (<IoCheckmarkSharp size={"22"} />)) 
            
            } 
            color={
              (status === "error" || status === "failed") &&  "red"||
              status === "success" &&  "teal"
            }
            title={<h3>{status.charAt(0).toUpperCase()+status.slice(1)}</h3>}
            >
                {<p style={{fontWeight:"500"}}>{message}</p>}
            </Notification>
        </div>
        }
        <div className="authFormContainer signUpForm">
          <form onSubmit={form.onSubmit((values) => submit(values))}>
            <A to={"/"} className="formLogoContainer">
              <img src={logoImg} alt="" />
              <h1>Miko</h1>
            </A>
            <h2>Sign up</h2>

            <Grid>
              <Grid.Col span={6}>
                <TextInput
                  label={"Username"}
                  size={"lg"}
                  radius={"8px"}
                  placeholder={"Enter username"}
                  width={"100%"}
                  {...form.getInputProps("username")}
                />
              </Grid.Col>

              <Grid.Col span={6}>
                <TextInput
                  label={"Email"}
                  size={"lg"}
                  radius={"8px"}
                  placeholder={"Enter email"}
                  width={"100%"}
                  {...form.getInputProps("email")}
                />
              </Grid.Col>
              <Grid.Col span={12}>
                <PasswordInput
                  label={"Password"}
                  size={"lg"}
                  radius={"8px"}
                  placeholder={"Enter password"}
                  {...form.getInputProps("password")}
                />
              </Grid.Col>

              <Grid.Col span={12}>
                <PasswordInput
                  label={"Confirm password"}
                  size={"lg"}
                  radius={"8px"}
                  placeholder={"Confirm password"}
                  {...form.getInputProps("confirmPassword")}
                />
              </Grid.Col>
            </Grid>

            <div className="btn">
              <Button
                size={"lg"}
                radius={"8px"}
                fullWidth
                type="submit"
                color={"major.0"}
                disabled={status === "loading" && true}
              >
                  {status === "loading" ? <Loader color={"major.0"}  size={"xl"} variant="dots"/> : "Sign up"}
              </Button>
            </div>

            <div className="formOr">
              <h3>OR</h3>
              <Button size="lg" color={"gray"} variant="outline">
                <FcGoogle size={"25px"} /> Sign up with google
              </Button>
              <p>
                Don't have an account? <a href="">Sign in</a>
              </p>
            </div>
          </form>
        </div>
      </MantineProvider>
      }
    </>
  );
};

export default SignUp;
