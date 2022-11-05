import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Wallet = () => {
  const [coins, setCoins] = useState([])

  const config = {
    headers: {
      accept: "application/json",
    },
  };

  const getCoins = useCallback(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
        config
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[config])

  useEffect(() => {
    getCoins();
  }, [coins, getCoins])

  return (
    <div>
      <h1 className="pageHeading">Wallet</h1>
      <div className="walletContainer">
        <div className="walletContent">
          <div className="card">
            <h4>Balance</h4>
            <h1>234252342</h1>
            <p className="currencyName">Naira</p>
          </div>
          <div className="coinContainer">
            {
              coins.map(coin =>
                <Link to={`/app/wallet/${coin.id}`} className="coinCard">
                  <img src={coin.image} alt="" />
                  <h4>{coin.name.toUpperCase()}</h4>
                  <p className="ammount">{coin.current_price}</p>
                </Link>
              )
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet