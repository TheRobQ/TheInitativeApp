import React from 'react';
import InitativeList from './InitativeList';

const MidPanel =({players, setInitative,  clearCombat}) => {
    return (
      <section className="main">
        <h1>Initiative order</h1>
        <article>
          {/* <h3 className="list"></h3> */}
          <p className="lead">"There is no winning or losing, but rather the value is in the experience of imagining yourself as a character in whatever genre you're involved in, whether it's a fantasy game, the Wild West, secret agents or whatever else. You get to sort of
          vicariously experience those things."</p>
          <p className="quoteName">
            <em>&mdash; Gary Gygax</em>
          </p>
        </article>
        <InitativeList players={players} setInitative={setInitative}/>
        <p className="btn btn-primary" id="clearAll" onClick={clearCombat}>Clear All</p><br />
      </section>
    )
}

export default MidPanel
