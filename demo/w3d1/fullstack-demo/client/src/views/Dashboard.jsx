// grab allPets from backend 

import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useHistory } from 'react-router-dom' 

const Dashboard = () => {
  const [pets, setPets] = useState()
  const history = useHistory()
  const [refresh, setRefresh ] = useState(true)

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/pets`)
      .then(res=>setPets(res.data))
      .catch(err=>console.log(err))
  },[refresh])


  // have a refresh state to make sure useEffect get reloaded
  const handleDelete1 =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
      .then(res=>{
        setRefresh(!refresh)
      })
      .catch(err=>console.log(err))
  }

  const handleDelete2 =(deleteId)=>{
    axios.delete(`http://localhost:8000/api/pets/${deleteId}`)
      .then(res=>{
        const filteredList = pets.filter((pet)=>pet._id !== deleteId)
        setPets(filteredList)
      })
      .catch(err=>console.log(err))
  }

  return (
    <fieldset>
      <legend> Dashboard.jsx</legend>
      <table>
        <thead>
          <tr>
            <th> Pet name</th>
            <th> Hair color</th>
            <th> Age</th>
            <th colSpan={2}> Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            pets &&
              pets.map((pet, i)=>(
                <tr key={i}>
                  <td> <Link to={`/pets/${pet._id}`}>{pet.petname}</Link></td>
                  <td> {pet.haircolor}</td>
                  <td> {pet.age}</td>
                  <td> <Link to={`/pets/${pet._id}/edit`} >Edit </Link></td>
                  <td> <button onClick={()=>handleDelete1(pet._id)}>Delete1</button></td>
                  <td> <button onClick={()=>handleDelete2(pet._id)}>Delete2</button></td>
                </tr>
              ))
          }
        </tbody>

      </table>

    </fieldset>
  )
}

export default Dashboard