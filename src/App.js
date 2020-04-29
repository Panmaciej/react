import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Menu from "./Components/Menu/Menu";
import Contact from "./Components/Contact/Contact";
import CoinList from "./Components/CoinList/CoinList";
import Overview from "./Components/Overview/Overview";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
        </div>
        <Route exact path="/" component={CoinList} />
        <Route path="/overview" component={Overview} />
        <Route path="/contact" component={Contact} />
      </Router>
    );
  }
}

export default App;
