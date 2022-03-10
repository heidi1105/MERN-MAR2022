import React, { Component } from 'react'

export class ClassTVShow extends Component {
  render() {
    return (
      <div>
        <h1>Class Component - TV Show</h1>
        <h3> Title: {this.props.title}</h3>
        <h3> Total Episodes: {this.props.episodes}</h3>
        <h3> Hashtags: 
            {
                this.props.hashtags.map((hashtag, i)=>(
                    <span key={i}> #{hashtag}</span>
                ))
            }
        </h3>
      </div>
    )
  }
}

export default ClassTVShow