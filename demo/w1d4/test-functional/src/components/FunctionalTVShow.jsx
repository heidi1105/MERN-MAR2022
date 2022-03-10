import React from 'react'

const FunctionalTVShow = (props) => {
  return (
    <div>
        <h1>Functional Component - TV Show</h1>
        <h3> Title: {props.title}</h3>
        <h3> Total Episodes: {props.episodes}</h3>
        <h3> Hashtags: 
            {
                props.hashtags.map((hashtag, i)=>(
                    <span key={i}> #{hashtag}</span>
                ))
            }
        </h3>
    </div>
  )
}

export default FunctionalTVShow