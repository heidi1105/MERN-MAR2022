// grab allPets from backend 

import React, { useEffect, useState } from 'react'
import axios from "axios"

const Dashboard = () => {
  const [pets, setPets] = useState()

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets`)
      .then(res=>setPets(res.data))
      .catch(err=>console.log(err))
  },[])

  return (
    <fieldset>
      <legend> Dashboard.jsx</legend>
      <table>
        <thead>
          <tr>
            <th> Pet name</th>
            <th> Hair color</th>
            <th> Age</th>
          </tr>
        </thead>
        <tbody>
          {
            pets &&
              pets.map((pet, i)=>(
                <tr key={i}>
                  <td> {pet.petname}</td>
                  <td> {pet.haircolor}</td>
                  <td> {pet.age}</td>
                </tr>
              ))
          }
        </tbody>

      </table>

    </fieldset>
  )
}

export default Dashboard