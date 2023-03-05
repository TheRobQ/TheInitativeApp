import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = ({players, handleNameChange, handleModifierChange, setInitative}) => {
  console.log(players)

    return(
      players.map((player, i)  => <PlayerCard key={i} 
        name={player.name} 
        id={i} modifier={player.modifier} 
        handleNameChange={handleNameChange} 
        handleModifierChange={handleModifierChange} 
        setInitative={setInitative}/>)
    )
}

export default PlayerList
