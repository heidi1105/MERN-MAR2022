import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <fieldset>
          <legend>Header.jsx</legend>
          <h1>{this.props.text}</h1>
      </fieldset>
    )
  }
}

export default Header