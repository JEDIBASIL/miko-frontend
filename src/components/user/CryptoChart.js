import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from "axios"
import { useCallback, useEffect, useState } from 'react';
import dateConverter from "../../utils/dateConverter";
// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];



const CryptoChart = ({ id }) => {
  const [coinData, setCoinData] = useState([])

  const getChart = useCallback(() => {
    const config = {
      headers: {
        accept: "application/json",
      },
    };

    axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=ngn&from=1660780860&to=${Date.now().toString()}`,
      config
    )
      .then((res) => {
        let newDataArray = [];
        for (let index = 0; index < res.data.prices.length; index++) {
          const newData = {
            uv: dateConverter(res.data.prices[index][0]),
            pv: res.data.prices[index][1],
          }
          newDataArray = [...newDataArray, newData]
        }
        setCoinData(newDataArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id])

  useEffect(() => {
    getChart();
  }, [id, getChart])
  return (

    <div className='homeChartContainer'>
      {id !== "" && <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={coinData}>
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          <XAxis dataKey="uv" fontSize={13} textAnchor="middle" label={<h5>ok</h5>} />
        </LineChart>
      </ResponsiveContainer>}
    </div>
  );
}



export default CryptoChart