import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Coinlist.css";

function CoinList() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.coinpaprika.com/v1/coins");
      setCurrencies(result.data);
    };
    fetchData();
  }, []);
  console.log(currencies);
  return (
    <div className="m-coinlist-cointainer">
      CoinList
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
