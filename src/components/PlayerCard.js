import React from 'react'
import FormInput from './Input.jsx';

const PlayerCard = (props) => {
  const characterInputChanged = (e) => {
      console.log(e.target)
      props.handleNameChange(e)
    };

    const modifierInputChanges = (e) => {
      console.log(e.target);
      props.handleModifierChange
    };

    return(
        <tr className="inputRow">
          <td>
            <label>Player/Foe</label>
          </td>
          <td>
            <FormInput 
              type="text"
              placeHolder = ''
              onChange={characterInputChanged}
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
              onChange={modifierInputChanges}
              className="modifier" 
              name="modifier" maxLength="3" size="3" 
              pattern="[0-9]"
            />
          </td>
        </tr>
    )
};

export default PlayerCard
