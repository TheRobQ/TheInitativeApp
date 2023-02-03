import React from 'react'
import FormInput from './Input.jsx';

const PlayerCard = (props) => {
  console.log(props)

    return(
        <tr className="inputRow" id={props.id}>
          <td>
            <label>Player/Foe</label>
          </td>
          <td>
            <FormInput 
              type="text"
              placeHolder = ''
              onChange={ e => props.handleNameChange(props.id, e)}
              className="characterName" 
              name="characterName" 
              size="18"
              value={props.name}
            />
          </td>
          <td>
            <label className="modLabel"> Modifier</label>
            <FormInput
              type="text"
              placeHolder = ''
              onChange={ e => props.handleModifierChange(props.id, e)}
              className="modifier" 
              name="modifier" maxLength="3" size="3" 
              pattern="[0-9]"
            />
          </td>
        </tr>
    )
};

export default PlayerCard
