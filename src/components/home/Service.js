
import {IoWalletOutline, IoCalendarOutline, IoShieldCheckmarkOutline} from "react-icons/io5"
const Service = () => {
  return (
    <div className="service">
        <h1>Build a robust and safe crypto portfolio you’ll always be <span>PROUD</span> of</h1>
        <div className="serviceContainer">
            <div className="card">
                <IoWalletOutline />
                <h2>Manage your portfolio</h2>
                <p>
                Buy and sell popular digital currencies like Bitcoin, Ethereum, Celo etc. and keep track of them in one place.
                </p>
            </div>
            <div className="card">
                <IoCalendarOutline />
                <h2>Recurring Buys</h2>
                <p>Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
            </div>
            <div className="card">
                <IoShieldCheckmarkOutline />
                    <h2>Vault Protection</h2>
                    <p>For added security, store your funds in a vault with time delayed withdrawals.</p>
            </div>  
        </div>
    </div>
  )
}

export default Service