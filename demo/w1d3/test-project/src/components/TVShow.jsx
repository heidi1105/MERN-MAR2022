import React, { Component } from 'react'

export default class TVShow extends Component {
  render() {
    const {title, episodes, hashtags} = this.props

    return (
      <fieldset>
          <legend>TVShow.jsx</legend>
            <h1> Title : {this.props.title} </h1>
            <h4> Total episodes: {this.props.episodes}  </h4>
            
                {
                    hashtags.map((hashtag, i)=>
                        <span>#{hashtag} </span>
                    )
                }


      </fieldset>
    )
  }
}
