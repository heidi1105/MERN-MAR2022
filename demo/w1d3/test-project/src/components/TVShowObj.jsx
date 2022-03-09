import React, { Component } from 'react'

export default class TVShowObj extends Component {
  render() {
    const {title, episodes, hashtags} = this.props.show

    return (
      <fieldset>
          <legend>TVShowObj.jsx</legend>
            <h1> Title : {title} </h1>
            <h4> Total episodes: {episodes}  </h4>
            
                {
                    hashtags.map((hashtag, i)=>
                        <span>#{hashtag} </span>
                    )
                }


      </fieldset>
    )
  }
}
