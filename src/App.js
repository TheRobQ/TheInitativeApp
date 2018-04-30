import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LeftPanel from './components/LeftPanel'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
    }
  }

  render() {
    console.log(React);
    return (
      <div className="gird">
        <Navbar />
        <LeftPanel />
      </div>
    );
  }
}

export default App;
