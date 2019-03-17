import React, {Component} from 'react';
import './styles/App.css';

import Header from "./components/blocks/Header/Header";
import Home from "./components/pages/Home/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Home/>
      </div>
    );
  }
}

export default App;
