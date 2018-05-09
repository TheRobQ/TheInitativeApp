import React from 'react';
import RollButton from './RollButton';
import PlayerList from './PlayerList'

const LeftPanel = ({addCharacter, removeCharacter, removeAll, cards,  handleNameChange, handleModChange}) => {

    return(
    <section className="sider">
      <form id="form1" >
        <table>
          <tbody>
            <PlayerList cards={cards} handleNameChange={handleNameChange} handleModChange={handleModChange}/>
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
            <tr>
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
    </section>)
  }

export default LeftPanel
