import CryptoCard from "../../components/user/CryptoCard"
import MarketStats from "../../components/user/MarketStats"
import QuickAction from "../../components/user/QuickAction"

const UserHome = () => {

  return (
    <div>
        <h1 className="pageHeading">Home</h1>
        <div className="userHomeContainer">
            <CryptoCard />
            <div className="userHomeContent">
              <MarketStats />
              <QuickAction />
            </div>
        </div>
    </div>
  )
}

export default UserHome