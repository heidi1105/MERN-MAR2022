import React, { Component } from 'react'

export class ClassState extends Component {
  constructor(props){
      super(props)
      this.state={
          count:0, 
          like:100  
      }
  }  

  handleDecrementCount =()=>{
    this.setState({count:this.state.count-1})
}

  render() {
    return (
        <fieldset>
        <legend>Class Component - states</legend>
        <h3> States</h3>
        <h3> Alert </h3>
        <button onClick={()=>alert("Class component - hi")}> Alert me</button>
        <h3> Count: {this.state.count} | Like: {this.state.like}</h3>
        <button onClick={()=>this.setState({count: this.state.count+1})}> Increment count</button>
        <button onClick={this.handleDecrementCount}> Decrement Count</button>
        <button onClick={()=>this.setState({like: this.state.like+1})}> Increment like</button>


    </fieldset>
    )
  }
}

export default ClassState

