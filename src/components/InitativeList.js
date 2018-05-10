import React from 'react';
import InitativeCard from './InitativeCard'

const InitativeList = ({players, setInitative}) =>{
    console.log(players);
     
    if(setInitative === true){
      return(
          players.sort((a, b) => b.modifier-a.modifier).map((card, i)  => <InitativeCard key={i} name={card.name} id={i} modifier={card.modifier} />)
      )
    } else {
      return <div></div>
    }
}

export default InitativeList
