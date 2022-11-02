import React from 'react'
import {Link as A} from "react-router-dom"
import logoImg from "../../images/logo.png"

const HomeNavbar = () => {
  return (
    <div className='navBar'>
        <div className='logoAndLinks'>
            <div className='logo'>
                <A to="/"><img src={logoImg} alt="" /> Miko</A>
            </div>
        </div>

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
  )
}

export default HomeNavbar