import { TextInput, PasswordInput, Button, MantineProvider, Notification, Loader } from "@mantine/core"
import { useState } from "react"
import "../../stylesheets/auth/style.css"
import logoImg from "../../images/logo.png"
import { FcGoogle } from "react-icons/fc"
import { useForm, zodResolver } from "@mantine/form"
import { IoCheckmarkSharp, IoAlertOutline, IoCloudOfflineSharp } from "react-icons/io5"
import { z } from "zod"
import axios from "axios"
import { isAuth, setAuthToken } from "../../utils/userAuth"
import { Navigate } from "react-router"
const SignIn = () => {

    const [status, setStatus] = useState("")
    const [message, setMessage] = useState("")

    const formSchema = z.object({
        username: z.string().min(1, { message: "Username is required" }),
        password: z.string().min(1, { message: "Password is required" })
    })

    const submit = ({ username, password }) => {
        const loginDetails = {
            username,
            password
        }
        setStatus("loading")
        verification(loginDetails)
    }

    const form = useForm({
        validate: zodResolver(formSchema),
        initialValues: {
            username: "",
            password: ""
        }
    })

    const verification = (user) => {
        axios.post("http://127.0.0.1:8080/api/v1/user/login", user, { withCredentials: true })
            .then(res => {
                console.log(res)
                setStatus(res.data.status)
                setMessage(res.data.message)
                res.data.status === "success" && (setAuthToken("rty5", "max") && setAuthToken("WsAQ", res.data.accessToken))

            }).catch(err => {
                console.log(err)
                setStatus("error")
            })
    }

    return (
        <>
            {isAuth() && <Navigate to={`/app`} />}
            {status === "success" && <Navigate to={`/app`} />}
            <MantineProvider
                theme={
                    {
                        colorScheme: 'dark',
                        colors: {
                            major: ["#464fca"]
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
                                status === "loading" && (<Loader color={"major.0"} size={"md"} variant="oval" />) ||
                                status === "error" && (<IoCloudOfflineSharp size={"22"} />) ||
                                status === "failed" && (<IoAlertOutline size={"22"} />) ||
                                status === "success" && (<IoCheckmarkSharp size={"22"} />)
                            }
                            color={
                                (status === "error" || status === "failed") && "red" ||
                                status === "success" && "teal"
                            }
                            title={<h3>{status.charAt(0).toUpperCase() + status.slice(1)}</h3>}
                        >
                            {
                                <p style={{ fontWeight: "500" }}>
                                    {
                                        (message.includes("not match") || message.includes("not found")) && "Incorrect username or password"
                                    }
                                    {
                                        message.includes("not verified") && "Account not verified"
                                    }
                                    {
                                        status === "error" && "An error occurred"
                                    }
                                    {
                                        status === "success" && "Account verified"
                                    }
                                </p>
                            }
                        </Notification>
                    </div>
                }
                <div className="authFormContainer">
                    <form onSubmit={form.onSubmit(values => submit(values))}>
                        <a className="formLogoContainer">
                            <img src={logoImg} alt="" />
                            <h1>Miko</h1>
                        </a>
                        <h2>Sign in</h2>
                        <TextInput
                            label={"Username"}
                            size={"lg"}
                            radius={"8px"}
                            placeholder={"Enter email"}
                            width={"100%"}
                            {...form.getInputProps("username")}
                        />

                        <PasswordInput
                            label={"Password"}
                            size={"lg"}
                            radius={"8px"}
                            placeholder={"Enter password"}
                            {...form.getInputProps("password")}
                        />
                        <p className="forgotPasswordLink"> <a href="" >Forgot password</a></p>

                        <div className="btn">
                            <Button
                                size={"lg"}
                                radius={"8px"}
                                fullWidth
                                type="submit"
                                color={"major.0"}
                                disabled={status === "loading" && true}
                            >
                                {status === "loading" ? <Loader color={"major.0"} size={"xl"} variant="dots" /> : "Sign up"}
                            </Button>
                        </div>
                        <div className="formOr">
                            <h3>OR</h3>
                            <Button size="lg" color={"gray"} variant="outline"><FcGoogle size={"25px"} /> Sign in with google</Button>
                            <p>Don't have an account? <a href="">Sign up</a></p>
                        </div>
                    </form>
                </div>
            </MantineProvider>


        </>

    )
}

export default SignIn