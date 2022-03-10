import React, { Component } from 'react'
// 1. direct import
import './../styles/styles.css'

// 3. css module
import styles from './Stylings.module.css'

// 2.2 inline style
const inlineStyle2={
    color: 'white',
    backgroundColor: 'rebeccapurple'
}

export class Stylings extends Component {


    render() {
        // 2.1 inline style
    const inlineStyle1={
        color: 'white',
        backgroundColor: this.props.color
    }

    return (
      <div>
          <h1> Stylings!!!!</h1>
            <button className="btn btn-primary"> Testing Bootstrap</button>
            <div className="directImport"> 1: Direct Import</div>
            <div style={inlineStyle1}> 2.1: Inline style</div>
            <div style={inlineStyle2}> 2.2: Inline style</div>
            <div className={styles.cssmodules}> 3: css module</div>


      </div>
    )
  }
}

export default Stylings