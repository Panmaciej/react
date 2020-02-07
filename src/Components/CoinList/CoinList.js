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
      <ul>
        {currencies.slice(0, 100).map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoinList;
