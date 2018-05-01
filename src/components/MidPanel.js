import React from 'react'

export default class MidPanel extends React.Component {
  render(){
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
        <p className="btn btn-primary" id="clearAll">Clear All</p><br />
      </section>
    )
  }
}
