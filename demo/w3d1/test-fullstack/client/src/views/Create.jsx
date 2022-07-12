import React, { useState } from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"



const Create = () => {
    const [petname, setPetname] = useState("")
    const [haircolor, setHaircolor] = useState("")
    const [age, setAge] = useState()
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post(`http://localhost:8000/api/pets`, {petname, haircolor, age})
            .then(res=>history.push("/pets"))
            .catch(err=>console.log(err))
    }

    return (
        <fieldset>
            <legend>Create.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Pet name: </label>
                    <input type="text" name="petname" value={petname}
                        onChange={e=>setPetname(e.target.value)} />                   
                </div>
                <div>
                    <label> Hair color: </label>
                    <input type="text" name="haircolor" value={haircolor}
                        onChange={e=>setHaircolor(e.target.value)} />                   
                </div>
                <div>
                    <label> Age: </label>
                    <input type="number" name="age" value={age}
                        onChange={e=>setAge(e.target.value)} />                   
                </div>
                <button> Submit</button>
            </form>
        </fieldset>
    )
}

export default Create