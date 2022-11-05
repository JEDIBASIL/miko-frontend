import logo from "../../images/logo.png"
import {IoLogoFacebook,IoLogoInstagram,IoLogoTwitter,IoLogoDiscord} from "react-icons/io5"
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
          <li><a href="">About</a></li>
          <li><a href="">Privacy and Policy</a></li>
          <li><a href="">Career</a></li>
        </ul>
        <ul>
          <h4>Faq</h4>
          <li><a href="">Supported Countries</a></li>
          <li><a href="">Join us on Discord</a></li>
        </ul>

        <ul>
          <h4>Products</h4>
          <li><a href="">Changera</a></li>
          <li><a href="">Peer to Peer</a></li>
          <li><a href="">Crypto Cards</a></li>
          <li><a href="">Partners Program</a></li>
        </ul>

        <ul>
          <h4>Resources</h4>
          <li><a href="">Blog</a></li>
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