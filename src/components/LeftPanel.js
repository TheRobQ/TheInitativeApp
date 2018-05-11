import React from 'react';
import RollButton from './RollButton';
import PlayerList from './PlayerList'

const LeftPanel = ({addCharacter, removeCharacter, removeAll, cards,  handleNameChange, handleModChange, rollTheDice, combat, loadParty}) => {

  //Saves party to local storage, if feild is blank, won't Saves
  const saveParty = (event) =>{
    for(let i = 0; i < cards.length; i++){
      if(cards.modifier === '' || cards.name === ''){
      }else{
      console.log(cards);
        localStorage.setItem("player" + i, cards[i].name);
        localStorage.setItem("modifier" + i, cards[i].modifier)}
    }
  }
  //Clears party from local storage
  const clearParty = () =>     localStorage.clear();


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
        <p className="btn btn-primary" id="save" onClick={saveParty}>Save party</p>
        <p className="btn btn-primary" id="load" onClick={loadParty}>Load party</p>
        <p  className="btn btn-primary" id="clear" onClick={clearParty}>Clear party</p>
        <br />
      </div>
    </section>)}


export default LeftPanel
