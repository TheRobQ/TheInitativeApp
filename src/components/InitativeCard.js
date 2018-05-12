import React from 'react';
// onClick={((event) => toggleRed(event))} 
const InitativeCard = ({name, modifier, removePlayer, id, toggleRed}) =>{
  let classes = 'ordered'
  return(
    <p className={classes} id={id}>{name} {modifier}&nbsp; <button className='remove' onClick={((event) => removePlayer(event, id))}></button></p>
    )
}

export default InitativeCard
