import logo from "../../images/logo.png"
import {IoLogoFacebook,IoLogoInstagram,IoLogoTwitter,IoLogoDiscord} from "react-icons/io5"
import { Link as A } from "react-router-dom"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="logoAndSocials">
            <div className="footerLogoContainer">
              <img src={logo} alt="" />
              <h3>Miko</h3>
            </div>

            <p>Fastest, Easiest and Cheapest way to buy cryptocurrencies.</p>
            <div className="socialsContainer">
              <IoLogoFacebook />
              <IoLogoInstagram />
              <IoLogoTwitter />
              <IoLogoDiscord />
            </div>
        </div>
        <ul>
          <h4>Company</h4>
          <li><A to={"/"}>About</A></li>
          <li><A to={"/"}>Privacy and Policy</A></li>
          <li><A to={"/"}>Career</A></li>
        </ul>
        <ul>
          <h4>Faq</h4>
          <li><A to={"/"}>Supported Countries</A></li>
          <li><A to={"/"}>Join us on Discord</A></li>
        </ul>

        <ul>
          <h4>Products</h4>
          <li><A to={"/"}>Changera</A></li>
          <li><A to={"/"}>Peer to Peer</A></li>
          <li><A to={"/"}>Crypto Cards</A></li>
          <li><A to={"/"}>Partners Program</A></li>
        </ul>

        <ul>
          <h4>Resources</h4>
          <li><A to={"/"}>Blog</A></li>
        </ul>
      </div>
      <p className="copyright">© 2022 Miko All rights reserved</p>

      <div className="blurCirlces">
          <div></div>
          <div></div>
      </div>
    </footer>
  )
}

export default Footer