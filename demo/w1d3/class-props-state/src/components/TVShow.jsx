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
                <h3> Hashtags : {hashtags}</h3>
            </div>
        )
    }
}

// export the class
export default TVShow