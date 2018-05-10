import React from 'react';

const InitativeCard = ({name, modifier}) =>{
  return(
    <p className='ordered'>{name} {modifier}&nbsp; <button className='remove'></button></p>
  )
}

export default InitativeCard
