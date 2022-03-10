import React from 'react'

const FunctionalTVShow = (props) => {
  return (
    <fieldset>
    <legend> Functional Component TV Show</legend>
    <h3> {props.title}</h3>
    <h3>  Total episodes: {props.episodes}</h3>
    <h3> Hashtags: 
            {
                props.hashtags.map((hashtag, i)=>(
                    <span key={i}> #{hashtag}</span>
                ))
            }
          </h3>
</fieldset>
  )
}

export default FunctionalTVShow