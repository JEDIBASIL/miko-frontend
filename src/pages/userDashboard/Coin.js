import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import CryptoChart from '../../components/user/CryptoChart'
import { Button, SimpleGrid } from '@mantine/core'


const Coin = () => {
    const params = useParams()
    const [coinMarket,setCoinMarket]= useState()
    const [status,setStatus]= useState("")
    useEffect(() =>{
        getCoin();
    })
    const getCoin = () => {
        axios
          .get(`https://api.coingecko.com/api/v3/coins/${params.coin}`, config)
          .then((res) => {
            setCoinMarket(res.data);
            setStatus("success");
          })
          .catch((err) => {
            console.log(err);
            setStatus("pending");
          });
      };
    
      const config = {
        headers: {
          accept: "application/json",
        },
      };
    
  return (
    <div>
        <h1 className="pageHeading">Wallet</h1>
        <div className='coinContainer'>

              {  
                    status==="success" &&
                    <div className='card'>
                        <img src={coinMarket.image.large} alt="" />
                        <h4>{coinMarket.name}</h4>
                        <h3>{coinMarket.market_data.current_price.usd}</h3>
                        <SimpleGrid cols={2} mt={20}>
                            <Button radius={50} color={"major.0"}>Buy</Button>
                            <Button radius={50} color={"major.0"} variant={"outline"}>Sell</Button>
                        </SimpleGrid>

                    </div>
                }
                    <div style={{width:"100%"}} className='coinChart'>
                        <CryptoChart id={params.coin} />
                    </div>
                
        </div>
    </div>
  )
}

export default Coin