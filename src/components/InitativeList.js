import React from 'react';
import InitativeCard from './InitativeCard'
const  random = function(modifier) {
  return Math.floor((Math.random() * 20) + 1)
}

const InitativeList = ({players, setInitative}) =>{

    if(setInitative === true){
      return(
          players.sort((a, b) => b.modifier-a.modifier).map((card, i)  => <InitativeCard key={i} name={card.name} id={i} modifier={random(card.modifier)} />)
      )
    } else {
      return <div></div>
    }
}

export default InitativeList
