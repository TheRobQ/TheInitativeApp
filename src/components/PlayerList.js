import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = ({cards, handleNameChange, handleModChange}) =>{
  return(
      cards.map((card, i)  => <PlayerCard key={i} name={card.name} id={i} modifier={card.modifier} handleNameChange={handleNameChange} handleModChange={handleModChange}/>)
  )
}

export default PlayerList
