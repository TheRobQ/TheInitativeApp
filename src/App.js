import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import LeftPanel from './components/LeftPanel'
import MidPanel from './components/MidPanel'
import RightPanel from './components/RightPanel'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: []
    }
  }

  render() {
    return (
      <div className="grid">
        <Navbar />
        <LeftPanel />
        <MidPanel players={this.state.players}/>
        <RightPanel  />
      </div>
    );
  }
}

export default App;
