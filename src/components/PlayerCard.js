import React from 'react'

function PlayerCard (props) {
  return(
    <tr className="inputRow">
      <td>
        <label>Player/Foe</label>
      </td>
      <td>
        <input type="text" value="" className="characterName" name="characterName" size="18" required />
      </td>
      <td>
        <label className="modLabel"> Modifier</label>
        <input type="text" className="modifier" name="modifier" maxlength="3" size="3" required pattern="[0-9]" oninvalid="this.setCustomValidity('Make sure to enter ony numbers')" oninput="setCustomValidity('')" />
      </td>
    </tr>
  )
}
