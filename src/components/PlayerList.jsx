import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = ({cards, handleNameChange, handleModifierChange, setInitative}) => {

    return(
      cards.map((card, i)  => <PlayerCard key={i} name={card.name} id={i} modifier={card.modifier} handleNameChange={handleNameChange} handleModifierChange={handleModifierChange} setInitative={setInitative}/>)
    )
}

export default PlayerList
