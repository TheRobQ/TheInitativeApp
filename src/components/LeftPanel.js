import React from 'react'
import PlayerCard from './PlayerCard'

export default class LeftPanel extends React.Component{

  render(){
    return(
    <section className="sider">
      <form id="form1">
        <table>
          <tbody>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <tr className="holder">
            </tr>
            <tr id="buttonRow">
              <td>
                <button id="addCharacter" form="form1" className="myBtn">Add</button>
              </td>
              <td className="center">
                <button id="axCharacter" form="form1" className="myBtn"> Remove last </button>
              </td>
              <td className="center">
                <button id="axAll" form="form1" className="myBtn">Remove All</button>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              <td className="center">
                <button type="submit" form="form1" value="Submit" id="roll">Roll the Dice</button>
              </td>
              <td>
                &nbsp;
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>)
  }
}
