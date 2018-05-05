import React from 'react';
import RollButton from './RollButton';
import PlayerList from './PlayerList'

export default class LeftPanel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      cards: [1, 2, 3]
    }
  }

  addCharacter = (e) =>{
    e.preventDefault()
    this.setState({cards: [...this.state.cards, this.state.cards.length+1]})
  }

  removeCharacter = (e) =>{
    e.preventDefault()
    this.setState({cards: this.state.cards.slice(0, -1)})
  }

  removeAll = (e) =>{
    e.preventDefault()
    this.setState({cards: []})
  }

  render(){
    console.log(this.state.cards);
    return(
    <section className="sider">
      <form id="form1">
        <table>
          <tbody>
            <PlayerList cards={this.state.cards}/>
            <tr className="holder">
            </tr>
            <tr id="buttonRow">
              <td>
                <button id="addCharacter" form="form1" className="myBtn" onClick={this.addCharacter}>Add</button>
              </td>
              <td className="center">
                <button id="axCharacter" form="form1" className="myBtn" onClick={this.removeCharacter}> Remove last </button>
              </td>
              <td className="center">
                <button id="axAll" form="form1" className="myBtn" onClick={this.removeAll}>Remove All</button>
              </td>
            </tr>
            <tr>
              <td>
                &nbsp;
              </td>
              <RollButton />
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
