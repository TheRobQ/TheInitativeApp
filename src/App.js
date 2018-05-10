import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import MidPanel from './components/MidPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [{name: '', modifier:''}, {name: '', modifier:''},
      {name: '', modifier:''},],
      combat: false
    }
  }
  //Set Values for a player's name
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

  //Set Values for a player's initative modifier
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

  //roll button clicked, sets value to true which kciks off the array map in the initative list component
  rollTheDice = (event) =>{
    event.preventDefault()
    this.setState({combat: true})
  }
//MidPanel clear button click, sets value to false and renders an empty midpanel
  clearCombat =(event) =>{
    event.preventDefault()
      this.setState({combat: false})
  }

  //Button Row
  //add object to players array
  addCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: [...this.state.players, {name: '', modifier:''}]})
  }

  //remove last object from players array
  removeCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: this.state.players.slice(0, -1)})
  }

  //clears players array. Usefuyl for loading a pre-defined party
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
        <MidPanel
          players={this.state.players}
          setInitative={this.state.combat}
          clearCombat={this.clearCombat}/>
        <RightPanel  />
        <Footer />
      </div>
    );
  }
}

export default App;
