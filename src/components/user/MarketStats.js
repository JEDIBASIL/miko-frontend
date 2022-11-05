import { Chip, Loader } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper";
import CryptoChart from "./CryptoChart";

const MarketStats = () => {
  const [cryptos, setCryptos] = useState([]);
  const [coinDetails, setcoinDetails] = useState({
    id: "bitcoin",
    name: "btc",
  });

  const [status, setStatus] = useState("pending");

  const [coinMarketData, setCoinMarketData] = useState(null);


  const getCoin = useCallback(() => {
    const config = {
      headers: {
        accept: "application/json",
      },
    };

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${coinDetails.id}`, config)
      .then((res) => {
        setCoinMarketData(res.data.market_data.current_price);
        setStatus("success");
      })
      .catch((err) => {
        console.log(err);
        setStatus("pending");
      });
  }, [coinDetails.id]);




  useEffect(() => {

    const config = {
      headers: {
        accept: "application/json",
      },
    };

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=ngn&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
        config
      )
      .then((res) => {
        setCryptos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getCoin();
  }, [cryptos, getCoin]);




  return (
    <div className="marketStats">
      {cryptos.length === 0 && (
        <div className="loaderContainer">
          {" "}
          <Loader size={"lg"} color={"major.0"} variant="dots" />
        </div>
      )}
      <div className="coinsContainer">
        <Chip.Group defaultValue={"bitcoin"} position="center">
          <Swiper
            slidesPerView={10}
            // breakpoints={{
            //   600:{
            //     width:530,
            //     slidesPerView: 3.8,
            //   },
            //   730:{
            //     width:530,
            //     slidesPerView: 4.8,
            //   },
            //   800:{
            //     width:530,
            //     slidesPerView: 6.3,
            //   },
            //   900:{
            //     width:530,
            //     slidesPerView: 14,
            //   }
            // }}
            spaceBetween={50}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
          >
            {cryptos.map((crypto) => (
              <SwiperSlide key={crypto.id}>
                <Chip
                  value={crypto.symbol}
                  key={crypto.id}
                  onClick={() => {
                    setcoinDetails({
                      name: crypto.symbol,
                      id: crypto.id,
                    });
                    getCoin();
                  }}
                >
                  <img src={crypto.image} alt="" />
                  <h4>{crypto.symbol.toUpperCase()}</h4>
                </Chip>
              </SwiperSlide>
            ))}
          </Swiper>
        </Chip.Group>
      </div>
      {status !== "pending" ? (
        <p className="convertedCoinPrize">
          {coinDetails.name.toUpperCase() +
            ` = ${coinMarketData.ngn + ""} NGN, ${coinMarketData.usd} USD, ${coinMarketData.eur
            } EURO`}
        </p>
      ) : (
        <p className="convertedCoinPrize">
          <Loader size={"lg"} variant="dots" />
        </p>
      )}
      <div className="durationContainer">
        <Chip.Group position="center">
          <Chip radius={5} value={"month"}>
            Past month
          </Chip>
          <Chip radius={5} value={"week"}>
            Past week
          </Chip>
          <Chip radius={5} value={"day"}>
            Past hour
          </Chip>
        </Chip.Group>
      </div>

      <CryptoChart id={coinDetails.id} />
    </div>
  );
};

export default MarketStats;
