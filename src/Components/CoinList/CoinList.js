import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./Coinlist.css";

function CoinList() {
  const [global, setGlobal] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    const fetchGlobalData = async () => {
      const result = await axios.get("http://localhost:3001/global");
      setGlobal(result.data);
    };
    const fetchCoinsData = async () => {
      const result = await axios.get("http://localhost:3001/overview");
      setCurrencies(result.data.coins);
    };
    fetchGlobalData();
    fetchCoinsData();
  }, []);
  console.log(currencies);
  return (
    <div className="m-coinlist-cointainer">
      CoinList
      <p>MARKET CAP: {global.market_cap_usd}</p>
      <TableContainer component={Paper}></TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>1h</TableCell>
            <TableCell>24h</TableCell>
            <TableCell>7d</TableCell>
            <TableCell>Volume (24h)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.slice(0, 100).map(item => (
            <TableRow key={item.id}>
              <TableCell>{item.rank}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{Math.floor(Math.random() * 200 ) - 100}%</TableCell>
              <TableCell>{Math.floor(Math.random() * 200 ) - 100}%</TableCell>
              <TableCell>{Math.floor(Math.random() * 200 ) - 100}%</TableCell>
              <TableCell>${Math.floor(Math.random() * 20000 )}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CoinList;
