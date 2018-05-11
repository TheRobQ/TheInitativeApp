import React from 'react';
import InitativeCard from './InitativeCard';



const InitativeList = ({players, setInitative, removePlayer}) =>{
  console.log(players);
    if(setInitative === true){
      return(
          players.sort((a, b) => b.initValue-a.initValue)
          .map((card, i)  => <InitativeCard key={i} name={card.name} id={i} modifier={card.initValue} removePlayer={removePlayer}/>)
      )
    } else {
      return <div></div>
    }
}

export default InitativeList
