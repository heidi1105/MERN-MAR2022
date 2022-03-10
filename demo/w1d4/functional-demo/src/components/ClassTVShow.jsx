import React, { Component } from 'react'

export class ClassTVShow extends Component {
  render() {
    return (
      <fieldset>
          <legend> Class Component TV Show</legend>
          <h3> {this.props.title}</h3>
          <h3>  Total episodes: {this.props.episodes}</h3>
          <h3> Hashtags: 
            {
                this.props.hashtags.map((hashtag, i)=>(
                    <span key={i}> #{hashtag}</span>
                ))
            }
          </h3>

      </fieldset>
    )
  }
}

export default ClassTVShow