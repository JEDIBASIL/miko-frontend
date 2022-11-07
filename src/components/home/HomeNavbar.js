import { Link as A } from "react-router-dom"
import logoImg from "../../images/logo.png"
import { CgMenuRight } from "react-icons/cg"
import { useState } from "react"

const HomeNavbar = () => {
    const [navBar,setNavbar] = useState(false)
    return (
        <div className='navBar'>
            <div className='logoAndLinks'>
                <div className='logo'>
                    <A to="/"><img src={logoImg} alt="" /> Miko</A>
                </div>
            </div>

            <ul className="navList">
                <li><A to="/">Buy and Sell</A></li>
                <li><A to="/">P2P</A></li>
                <li><A to="/">Crypto Cards</A></li>
            </ul>

            <div className='btn'>
                <A to="/auth/sign-in">Sign in</A>
                <A to="/auth/sign-up"><button>Create account</button></A>
            </div>

            <div className="burger">
                <CgMenuRight onClick={()=>{
                    setNavbar(!navBar)
                    }} />
            </div>


           { 
            navBar &&
           <div className="mobileNav">
                <ul>
                    <li><A to="/">Buy and Sell</A></li>
                    <li><A to="/">P2P</A></li>
                    <li><A to="/">Crypto Cards</A></li>
                </ul>

                <div className='btn'>
                <A to="/auth/sign-in">Sign in</A>
                <A to="/auth/sign-up"><button>Create account</button></A>
            </div>
            </div>
            }
        </div>
    )
}

export default HomeNavbar