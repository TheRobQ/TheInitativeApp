import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LeftPanel from './components/LeftPanel'
import MidPanel from './components/MidPanel'
import RightPanel from './components/RightPanel'

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
      <div className="grid">
        <Navbar />
        <LeftPanel />
        <MidPanel />
        <RightPanel />
      </div>
    );
  }
}

export default App;
