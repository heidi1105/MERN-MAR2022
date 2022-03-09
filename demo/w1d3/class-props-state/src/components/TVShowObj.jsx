import React, { Component } from 'react'

export class TVShowObj extends Component {
  render() {
      const {title, episodes, hashtags} = this.props.tvshow
    return (
        <div>
        <h1> TV Show Component 2</h1>
        <h3>Title : {this.props.tvshow.title}</h3>
        <h3> Total episodes : {episodes}</h3>
        <h3> Hashtags : {hashtags}</h3>
    </div>
    )
  }
}

export default TVShowObj