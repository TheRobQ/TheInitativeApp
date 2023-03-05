import React, { useState, useEffect } from 'react';
import './App1.css';
import Navbar from './components/Navbar';
import LeftPanel from './components/LeftPanel';
import MidPanel from './components/MidPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';

const App  = () => {
  // constructor(){
  //   super();
  //   this.state = {
  //     players: [{name: '', modifier:'', initValue: 0, highlight: false}, {name: '', modifier:'', initValue: 0, highlight: false}, {name: '', modifier:'', initValue: 0, highlight: false}],
  //     combat: false,
  //     initativeList: []
  //   }
  // };

  const [players, setPlayers] = useState([{name: '', modifier:'', initValue: 0, highlight: false}, {name: '', modifier:'', initValue: 0, highlight: false}, {name: '', modifier:'', initValue: 0, highlight: false}]);
  const [combat, setCombat] = useState(false);
  const [initativeList, setinitativeList] = useState([]);

  //Set Values for a player's name in the form
  const handleNameChange = (index, e) => {
    const newVal = players.map(
      (player, i) =>{
        if(i != index){
          return player
        }
        return {...player, name: e.target.value}
      });
      setPlayers(newVal);
     
  };

  //Set Values for a player's initative modifier in the form
  const handleModifierChange = (index, e) => {
    const newVal = this.state.players.map(
      (player, i) =>{
        if(index != i){
          return player
        }
        return{...player, modifier: e.target.value}
      });
      this.setState({players: newVal});
  }

  //Generate a random number from 1 to 20 (this is the range of a D20)
  const random = () => {
    return Math.floor((Math.random() * 20) + 1)
  }

//roll button clicked, sets value to true which kciks off the array map in the initative list component
  const rollTheDice = (event) =>{
    event.preventDefault();
    const initativeList = this.state.players.filter( player => player.name && !isNaN(parseInt(player.modifier,10)) );

    initativeList.forEach(player => player.initValue = parseInt(player.modifier,10) + this.random() )
    
    this.setState(  {combat: true, initativeList: initativeList} );
  };

//MidPanel clear button click, sets value to false and renders an empty midpanel
  const clearCombat = (event) =>{
    event.preventDefault()
      this.setState({combat: false, initativeList: []})
  };

  //Button Row functions
  //add object to players array
  const addCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: [...this.state.players, {name: '', modifier:''}]})
  }

  //remove last object from players array
  const removeCharacter = (e) =>{
    e.preventDefault()
    this.setState({players: this.state.players.slice(0, -1)})
  }

  //Local storage utilities
  //clears players array. Usefuyl for loading a pre-defined party
  const removeAll = (e) =>{
    e.preventDefault()
    this.setState({players: []})
  }

  //Player clicks load party, adds party to state object
  const loadParty =(event) => {
    let keys = Object.keys(localStorage);
    const localParty = [];

    for (var i = 0; i < keys.length / 2; i++) {
      localParty.push({name: localStorage.getItem(keys[i + keys.length/2]), modifier: localStorage.getItem(keys[i])});
    }
    this.setState({players: [...localParty, ...this.state.players]})
  }

//Player clicks skull on MidPanel to remove that player from the initative list
const removePlayer = (event, id) =>{
    event.preventDefault()
    let players = this.state.initativeList
    players.splice(id, 1)
    this.setState({initativeList: players})
  }

  const turnRed = (event, id) =>{
    const toggle = this.state.initativeList.map(
      (player, index) =>{
        if(id !== index){
          return player
        }
        return{...player, highlight: !player.highlight}
      })
      this.setState({initativeList: toggle})
  }

    return (
      <div className="grid">
        <Navbar />
        <LeftPanel
          addCharacter={addCharacter}
          removeCharacter={removeCharacter}
          removeAll={removeAll}
          players={players}
          handleNameChange={handleNameChange}
          handleModifierChange={handleModifierChange}
          rollTheDice={rollTheDice}
          combat={combat}
          loadParty={loadParty}
        />
        <MidPanel
          players={initativeList}
          setInitative={combat}
          clearCombat={clearCombat}
          removePlayer={removePlayer}
          turnRed={turnRed} />
        <RightPanel  />
        <Footer />
      </div>
    );
}

export default App;
