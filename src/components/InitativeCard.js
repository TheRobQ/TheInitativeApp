import React from 'react';
// onClick={((event) => toggleRed(event))}
const InitativeCard = ({name, modifier, highlight, removePlayer, id, turnRed}) =>{
  let classes = (highlight === false) ? 'ordered' : 'ordered highlight'
  return(
    <p className={classes} id={id} onClick={((event) => turnRed(event, id))}>{name} {modifier}&nbsp; <button className='remove' onClick={((event) => removePlayer(event, id))}></button></p>
    )
}

export default InitativeCard
