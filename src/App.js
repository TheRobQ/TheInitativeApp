import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import MidPanel from './components/MidPanel';
import RightPanel from './components/RightPanel';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [{name: '', modifier:''}, {name: '', modifier:''},
      {name: '', modifier:''},],
      combat: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.rollTheDice = this.rollTheDice.bind(this)
  }
  //Set Values
  handleNameChange = (id) => (e) => {
    const newVal = this.state.players.map(
      (player, pid) =>{
        if(id !== pid){
          return player
        }
        return{...player, name: e.target.value}
      })
      this.setState({players: newVal})
  }

  handleModChange = (id) => (e) => {
    const newVal = this.state.players.map(
      (player, pid) =>{
        if(id !== pid){
          return player
        }
        return{...player, modifier: e.target.value}
      })
      this.setState({players: newVal})
  }

  rollTheDice = (event) =>{
    event.preventDefault()
    console.log('click');
    this.setState({combat: true})
  }

  //Button Row
  addCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: [...this.state.players, {name: '', modifier:''}]})
  }

  removeCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: this.state.players.slice(0, -1)})
  }

  removeAll = (e) =>{
    e.preventDefault()
    this.setState({players: []})
  }

  render() {
    console.log(this.state.combat);
    return (
      <div className="grid">
        <Navbar />
        <LeftPanel
          addCharacter={this.addCharacter}
          removeCharacter={this.removeCharacter}
          removeAll={this.removeAll}
          cards={this.state.players}
          handleNameChange={this.handleNameChange}
          handleModChange={this.handleModChange}
          rollTheDice={this.rollTheDice}
        />
        <MidPanel players={this.state.players} setInitative={this.state.combat}/>
        <RightPanel  />
      </div>
    );
  }
}

export default App;
