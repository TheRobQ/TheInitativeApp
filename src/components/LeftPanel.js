import React from 'react'
import './PlayerCard'

export default class LeftPanel extends React.Component{

  render(){
    return(
    <div class="sider">
      <h1></h1>
      <table>
        <tbody>
          <form id="form1">
            PlayerCards.map((card, index) => {
              <PlayerCard key={index} />
            })
            <tr class="holder">
            </tr>
          </form>
        </tbody>
      </table>
    </div>)
  }
}
