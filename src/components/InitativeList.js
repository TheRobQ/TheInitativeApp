import React from 'react';
import InitativeCard from './InitativeCard';



const InitativeList = ({players, setInitative, removePlayer, turnRed}) =>{

    if(setInitative === true){
      return(
          players.sort((a, b) => b.initValue-a.initValue)
          .map((player, i)  => <InitativeCard key={i} name={player.name} id={i} modifier={player.initValue} highlight={player.highlight} removePlayer={removePlayer} turnRed={turnRed} />)
      )
    } else {
      return <div></div>
    }
}

export default InitativeList
