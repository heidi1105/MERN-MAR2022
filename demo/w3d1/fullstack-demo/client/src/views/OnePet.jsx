// grab id from params
// using the id, axios
// useEffect, useState

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"

const OnePet = () => {
  const {id} = useParams() // destructure the id from params
  const [pet, setPet] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets/${id}`)
      .then(res=>setPet(res.data))
      .catch(err=> console.log(err))
  },[])

  return (
    <fieldset>
      <legend> OnePet.jsx</legend>
      {
        pet?
          <div>
            <h3> {pet.petname}</h3>
            <h3> Hair color: {pet.haircolor}</h3>
            <h3> Age: {pet.age}</h3>
          </div>:
          <h1> Loading...</h1>
      }
    </fieldset>
  )
}

export default OnePet