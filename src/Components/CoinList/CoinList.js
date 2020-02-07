import React from "react";
import "./Coinlist.css";

class CoinList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?format=json&results=10")
      .then(res => res.json())
      .then(json => this.setState({ contacts: json.results }));
  }
  render() {
    return <div className="m-coinlist-cointainer">CoinList</div>;
  }
}

export default CoinList;
