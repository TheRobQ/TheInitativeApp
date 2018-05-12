import React from 'react'

const PlayerCard = (props) => {

    return(
        <tr className="inputRow">
          <td>
            <label>Player/Foe</label>
          </td>
          <td>
            <input type="text" className="characterName" name="characterName" size="18" value={props.name} onChange={props.handleNameChange(props.id)} required />
          </td>
          <td>
            <label className="modLabel"> Modifier</label>
            <input type="text" className="modifier" name="modifier" maxLength="3" size="3" value={props.modifier} onChange={props.handleModChange(props.id) }
              required pattern="[0-9]"
            />
          </td>
        </tr>
    )
}

export default PlayerCard
