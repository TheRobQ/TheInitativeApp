import React, { Component } from 'react';
import './App1.css';
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
      combat: false,
      initativeList: []
    }
  };

  //Set Values for a player's name in the form
  handleNameChange = (id) => (e) => {
    
  };

  //Set Values for a player's initative modifier in the form
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

  //Generate a random number from 1 to 20
   random = () => {
    return Math.floor((Math.random() * 20) + 1)
  }

//roll button clicked, sets value to true which kciks off the array map in the initative list component
  rollTheDice = (event) =>{
    event.preventDefault()
    let initativeList = []
    for(let i = 0; i < this.state.players.length; i++){
      initativeList.push(this.state.players[i])
    }
    initativeList.forEach(element => {
       element.initValue = parseInt(element.modifier,10) + this.random();
       element.highlight = false})
    this.setState((prevState) => {
      return   {combat: true, initativeList: initativeList}
    })
  }

//MidPanel clear button click, sets value to false and renders an empty midpanel
  clearCombat = (event) =>{
    event.preventDefault()
      this.setState({combat: false, initativeList: []})
  }

  //Button Row functions
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

  //Local storage utilities
  //clears players array. Usefuyl for loading a pre-defined party
  removeAll = (e) =>{
    e.preventDefault()
    this.setState({players: []})
  }

  //Player clicks load party, adds party to state object
  loadParty =(event) => {
    let keys = Object.keys(localStorage);
    const localParty = [];

    for (var i = 0; i < keys.length / 2; i++) {
      localParty.push({name: localStorage.getItem(keys[i + keys.length/2]), modifier: localStorage.getItem(keys[i])});
    }
    this.setState({players: [...localParty, ...this.state.players]})
  }

//Player clicks skull on MidPanel to remove that player from the initative list
 removePlayer = (event, id) =>{
    event.preventDefault()
    let players = this.state.initativeList
    players.splice(id, 1)
    this.setState({initativeList: players})
  }

  turnRed = (event, id) =>{
    const toggle = this.state.initativeList.map(
      (player, index) =>{
        if(id !== index){
          return player
        }
        return{...player, highlight: !player.highlight}
      })
      this.setState({initativeList: toggle})
  }

  render() {
    console.log('version .2.0')
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
          combat={this.state.combat}
          loadParty={this.loadParty}
        />
        <MidPanel
          players={this.state.initativeList}
          setInitative={this.state.combat}
          clearCombat={this.clearCombat}
          removePlayer={this.removePlayer}
          turnRed={this.turnRed} />
        <RightPanel  />
        <Footer />
      </div>
    );
  }
}

export default App;
