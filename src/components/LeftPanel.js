import React from 'react';
import RollButton from './RollButton';
import PlayerList from './PlayerList'

class LeftPanel extends React.Component {

  render(){
    const {addCharacter, removeCharacter, removeAll, cards,  handleNameChange, handleModChange, rollTheDice, combat} = this.props
    return(
    <section className="sider">
      <form id="form1" onSubmit={rollTheDice}>
        <table>
          <tbody>
            <PlayerList cards={cards} handleNameChange={handleNameChange} handleModChange={handleModChange} combat={combat}/>
            <tr className="holder">
            </tr>
            <tr id="buttonRow">
              <td>
                <button id="addCharacter" form="form1" className="myBtn" onClick={addCharacter}>Add</button>
              </td>
              <td className="center">
                <button id="axCharacter" form="form1" className="myBtn" onClick={removeCharacter}> Remove last </button>
              </td>
              <td className="center">
                <button id="axAll" form="form1" className="myBtn" onClick={removeAll}>Remove All</button>
              </td>
            </tr>
            <tr className="roll">
              <td>
                &nbsp;
              </td>
              <RollButton/>
              <td>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="functionality">
        <p className="btn btn-primary" id="save" form="form1">Save party</p>
        <p className="btn btn-primary" id="load" form="form1">Load party</p>
        <p  className="btn btn-primary" id="clear" form="form1">Clear party</p>
        <br />
      </div>
    </section>)}
  }

export default LeftPanel
