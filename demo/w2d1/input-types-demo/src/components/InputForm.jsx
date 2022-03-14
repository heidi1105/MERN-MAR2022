import React, { useState } from 'react'

// input --> 1. useState 2. initiate the state 3. eventHandler
// form --> 1. create function for the submit 2. e.preventDefault  3. eventHandler

const InputForm = (props) => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("sci-fi")
    const [recommended, setRecommended] = useState(true)

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log({title, genre, recommended})
        props.onNewShow({title, genre, recommended})

    }

    return (
        <div>
            <h1> More input types</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='form-label'> Title</label>
                    <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} className="form-control" />
                </div>
                <div>
                    <label className='form-label'> Genre</label>
                    <select name="genre" onChange={(e)=>setGenre(e.target.value)} value={genre} className="form-control" >
                        {/* <option hidden /> */}
                        <option value="sci-fi"> Sci-fi</option>
                        <option value="sitcom"> Sitcom</option>
                        <option value="fantasy"> Fantasy</option>
                    </select>
                </div>
                <div>
                    <label className='form-label'> Recommended?</label>
                    <input type="checkbox" name="recommended" checked={recommended}
                        onChange={(e)=>setRecommended(e.target.checked)}  />
                </div>
                <button className='btn btn-primary btn-block'> Create new show</button>
            </form>

        </div>
    )
}

export default InputForm