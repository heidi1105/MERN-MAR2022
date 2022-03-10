// import dependencies
import React, {Component} from 'react'

// initiate the class
class TVShow extends Component{
    render(){
        const {title, episodes, hashtags} = this.props
        return(
            <div>
                <h1> TV Show Component</h1>
                <h3>Title : {title}</h3>
                <h3> Total episodes : {episodes}</h3>

                <ul>
                    {
                        hashtags.map((hashtag, i)=>{
                            return (
                                <li key={i}>#{hashtag}</li>
                            )
                        })
                    }

                    {
                        hashtags.map((hashtag, i)=>(
                            <li key={i}> #{hashtag}</li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}

// export the class
export default TVShow