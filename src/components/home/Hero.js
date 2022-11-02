import heroImg from "../../images/heroImg.png"
const Hero = () => {
  return (
    <section className="hero">
        <div className="backgroundGlass">
            <div></div>
            <div></div>
        </div>
       <div className="text">
            <h1>Buy and Sell</h1>
            <h1>
                 Crypto at the <span>best prices</span> instantly
            </h1>
            <p>
            {/* Bitmama is a highly-secured and fast-growing crypto platform to buy, sell or trade Bitcoin, Ethereum, Ripple, Celo and other cryptocurrencies at the best rates. */}
            </p>
            <button>Get started</button>
       </div>
       <div className="img">
        <img src={heroImg} alt="" />
       </div>
    </section>
  )
}

export default Hero