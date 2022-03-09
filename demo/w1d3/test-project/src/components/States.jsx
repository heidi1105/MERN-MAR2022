import React, { Component } from 'react'

export class States extends Component {
    constructor(props){
        super(props)
        this.state ={
            count: 0,
            likes: 0
        }
    }
    handleClick = () =>{
        this.setState({count: this.state.count+2})
    }
    

  render() {
    return (
      <div>
        <h1> Alert Handler</h1>
        <button onClick={()=>alert(this.state.count)}>Alert count</button>
        <h1>Count : {this.state.count}</h1>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Add count</button>

        <button onClick={this.handleClick}>Add count 2 on separate method</button>

        <h1>likes: {this.state.likes} </h1>
        <button onClick={()=>this.setState({likes : this.state.likes +1})}> Like!</button>


      </div>
    )
  }
}

export default States