import React, {useState} from 'react'
import FunctionTVShow from './FunctionTVShow'

const Form = () => {
    const [title, setTitle] = useState("abc")

  return (
    <div>
        <h1> Form</h1>
        <form>
            <label> Title </label>
            <input name="title" type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
        </form>
        <p> Title: {title}</p>


        
        <FunctionTVShow title={title} episodes = {235} hashtags={["TheClassic", "sit-com"]}/>

    </div>
  )
}

export default Form