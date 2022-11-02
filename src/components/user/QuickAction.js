import React from 'react'
import {IoCartSharp,IoBagHandleSharp} from "react-icons/io5"
import {IoIosCard, IoIosRocket,IoIosSend} from "react-icons/io"
import {GiWallet} from "react-icons/gi"
import { Link as A } from 'react-router-dom'
const QuickAction = () => {
  return (
    <div className='quickAction'>
      <div className='quickActionContainer'>
          <A to={"/app/wallet/buy"} className='card'>
            <IoCartSharp />
            <h4>Buy</h4>
          </A>
          <A to={"/app/wallet/sell"} className='card'>
            <IoBagHandleSharp />
            <h4>Sell</h4>
          </A>

          <A to={"/app/wallet/fund"} className='card'>
            <GiWallet />
            <h4>Fund wallet</h4>
          </A>

          <div className='card'>
            <IoIosCard />
            <h4>Withdraw</h4>
          </div>

          <div className='card'>
            <IoIosRocket />
            <h4>Buy Crypto,Pay Later</h4>
          </div>

          <div className='card'>
            <IoIosSend />
            <h4>Send money</h4>
          </div>
      </div>
    </div>
  )
}

export default QuickAction