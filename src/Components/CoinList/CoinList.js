import React from "react";
import "./Coinlist.css";

class CoinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("https://api.coinpaprika.com/v1/coins")
      .then(res => res.json())
      .then(json => this.setState({ currencies: json.results }));
  }
  render() {
    return <div className="m-coinlist-cointainer">CoinList</div>;
  }
}

export default CoinList;
