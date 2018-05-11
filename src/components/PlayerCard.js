import React from 'react'

export default class PlayerCard extends React.Component{
  shouldComponentUpdate(){
    if(this.props.setInitative === true){
    return false}
    return true
  }
  render(){
    return(
        <tr className="inputRow">
          <td>
            <label>Player/Foe</label>
          </td>
          <td>
            <input type="text" className="characterName" name="characterName" size="18" value={this.props.name} onChange={this.props.handleNameChange(this.props.id)} required />
          </td>
          <td>
            <label className="modLabel"> Modifier</label>
            <input type="text" className="modifier" name="modifier" maxLength="3" size="3" value={this.props.modifier} onChange={this.props.handleModChange(this.props.id)}
              // required pattern="[0-9]" onInvalid={this.setCustomValidity('Make sure to enter ony numbers')} onInput="setCustomValidity('')"
            />
          </td>
        </tr>
          )
        }
}
