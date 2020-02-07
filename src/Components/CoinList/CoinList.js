import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Coinlist.css";

function CoinList() {
  const [global, setGlobal] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const fetchGlobalData = async () => {
      const result = await axios("https://api.coinpaprika.com/v1/global");
      setGlobal(result.data);
    };
    const fetchCoinsData = async () => {
      const result = await axios("https://api.coinpaprika.com/v1/coins");
      setCurrencies(result.data);
    };
    fetchGlobalData();
    fetchCoinsData();
  }, []);
  console.log(currencies);
  return (
    <div className="m-coinlist-cointainer">
      CoinList
      <p>MARKET CAP: {global.market_cap_usd}</p>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {currencies.slice(0, 100).map(item => (
            <tr key={item.id}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;
