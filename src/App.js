import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'



class App extends Component {
  render() {
    console.log(React);
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;
