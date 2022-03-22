// have a form, send the info to backend
// form, input : useState
// axios : send info to backend
// history : redirect

import React, {useState} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom"

const Create = () => {
  const [petname, setPetname] = useState("")
  const [haircolor, setHaircolor] = useState("")
  const [age, setAge] = useState(0)
  const history = useHistory()
  const [errors, setErrors] = useState([])

  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post(`http://localhost:8000/api/pets`,{petname, haircolor, age})
      .then(res=>{ // successful
        history.push("/pets")
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors
        const errorArr = []
        for( const key of Object.keys(errorResponse)){ // key = "petname"
          errorArr.push(errorResponse[key]["message"]) 
        }
        console.log(errorArr)
        setErrors(errorArr)
      })
  }


  return (
    <fieldset>
      <legend> Create.jsx</legend>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Pet name</label>
          <input type="text" name="petname" value={petname}
            onChange={e=>setPetname(e.target.value)}
          />
        </div>
        <div>
          <label> Hair color</label>
          <input type="text" name="haircolor" value={haircolor}
            onChange={e=>setHaircolor(e.target.value)}
          />
        </div>
        <div>
          <label> Age</label>
          <input type="number" name="age" value={age}
            onChange={e=>setAge(e.target.value)}
          />
        </div>
        <button> Submit</button>
      </form>
      {
        errors.map((err, i)=>{
          return(
            <p key={i} style={{color:"red"}}>{err}</p>
        )})
      }
      {
        errors.map((err, i)=>(
            <p key={i} style={{color:"red"}}>{err}</p>
        ))
      }

    </fieldset>
  )
}

export default Create