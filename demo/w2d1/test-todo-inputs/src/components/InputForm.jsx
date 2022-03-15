import React, { useState } from 'react'

const InputForm = (props) => {
    const [title, setTitle] = useState("")
    const [genre, setGenre] = useState("")
    const [recommended, setRecommended] = useState(true)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log({title, genre, recommended})
        props.onNewShow({title, genre, recommended})
        clearForm()
    }

    const clearForm = () =>{
        setTitle("")
        setGenre("")
        setRecommended(true)
        
    }

    return (
        <div>
            <h1>More input types</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Title: </label>
                    <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} className="form-control" value={title}/>
                </div>
                <div>
                    <label>Genre: </label>
                    <select value={genre} onChange={(e)=>setGenre(e.target.value)} className="form-control" >
                    <option hidden />
                    <option value="sci-fi"> Sci-fi</option>
                    <option value="sitcom"> Sitcom</option>
                    <option value="fantasy"> Fantasy</option>
                    </select>
                </div>
                <div>
                    <label>Recommend to others? </label>
                    <input type="checkbox" name="recommended" checked={recommended} onChange={e=>setRecommended(e.target.checked)} />
                </div>

                <button className="btn btn-block btn-primary">Create new show</button>



            </form>

        </div>
    )
}

export default InputForm