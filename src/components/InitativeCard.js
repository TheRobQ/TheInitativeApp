import React from 'react';

const InitativeCard = ({name, modifier, removePlayer, id}) =>{
  return(
    <p className='ordered' id={id}>{name} {modifier}&nbsp; <button className='remove' onClick={((event) => removePlayer(event, id))}></button></p>
    )
}

export default InitativeCard
