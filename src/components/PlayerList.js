import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList =({cards}) =>{
  return(
      cards.map((card, i)  => <PlayerCard key={i}/>)
  )
}

export default PlayerList
