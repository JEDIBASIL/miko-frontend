import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import bitcoinImage from "../../images/bitcoin.webp"
import etheriumImage from "../../images/ethereum.webp"


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination } from "swiper";

const CryptoCard = () => {
  return (
    <div>
    <Swiper 
    //  slidesPerView={3}
     spaceBetween={20}
     breakpoints={{
       500:{
         width:500,
         slidesPerView: 1,
       },
       530:{
        width:630,
        slidesPerView: 2,
      },
       600:{
        width:570,
        slidesPerView: 2,
      },

      700:{
        width:700,
        slidesPerView: 2,
      },

       830:{
        width:630,
        slidesPerView: 2,
      },
      900:{
        width:950,
        slidesPerView: 3,
      }
     }}
    pagination={{
          dynamicBullets: true,
    }} 
    navigation={true} 
    modules={[Navigation,Pagination]} 
    className="mySwiper CryptoCard"
    >
    <SwiperSlide className="slideContainer">
      <div className='card cash'>
          <h4>Balance</h4>
          <h1>234252342</h1>
          <p className="currencyName">Naira</p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="slideContainer">
      <div className='card'>
        <h4>Balance</h4>
          <div className="currency">
            <h1>23422</h1>
            <img src={bitcoinImage} alt="" />
          </div>
          <p className="currencyName">Bitcoin</p>
      </div>
    </SwiperSlide>
    
    <SwiperSlide className="slideContainer">
      <div className='card'>
        <h4>Balance</h4>
          <div className="currency">
            <h1>2453</h1>
            <img src={etheriumImage} alt="" />
          </div>
          <p className="currencyName">Ethereum</p>
      </div>
    </SwiperSlide>

    <SwiperSlide className="slideContainer">
      <div className='card'>

      </div>
    </SwiperSlide>

  </Swiper>


    </div>
  )
}

export default CryptoCard